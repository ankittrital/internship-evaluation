import {BASE_URL} from '@config/BaseUrl/urlconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import CryptoJS from 'react-native-crypto-js';

type authProvider = {
  token: string;
  setToken: (token: string) => void;
  loginApi: (arg1: {}) => void;
  userinfo: any;
  setUserInfo: (userinfo: any) => void;
};

export const AuthContext = createContext<authProvider>({
  token: '',
  setToken() {},
  loginApi() {},
  userinfo: {},
  setUserInfo() {},
});

export const AuthProvider = ({children}: any) => {
  const [token, setToken] = useState<string>('');
  const [userinfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    AsyncStorage.getItem('AccessToken')
      .then(accessToken => {
        if (accessToken) {
          let decryptToken = CryptoJS.AES.decrypt(
            accessToken,
            'secret key 123',
          );
          let originalToken = decryptToken.toString(CryptoJS.enc.Utf8);
          setToken(JSON.parse(originalToken).tokens);
        }
      })
      .catch(e => {
        console.log('Error while decrypting=>', e);
      });
  }, []);

  useEffect(() => {
    if (token) {
      try {
        fetch(`${BASE_URL}api/account/userinfo`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(response => response.json())
          .then(data => {
            setUserInfo(data);
          })
          .catch(err => {
            console.log('fetch error=>', err);
          });
      } catch (error) {
        console.log('error=>', error);
      }
    }
  }, [token]);

  const loginApi = async (inputs: any) => {
    const LOGIN_URL = `${BASE_URL}connect/token`;
    const bodyFormData = new FormData();
    const {email, password} = inputs;
    bodyFormData.append('username', email);
    bodyFormData.append('password', password);
    bodyFormData.append('grant_type', 'password');
    bodyFormData.append('client_id', 'self');

    try {
      const res = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: bodyFormData,
      });
      const data = await res.json();
      const access_data_token = data.access_token;
      let encryptedToken = CryptoJS.AES.encrypt(
        JSON.stringify({tokens: access_data_token}),
        'secret key 123',
      ).toString();

      await AsyncStorage.setItem('AccessToken', encryptedToken);
      setToken(access_data_token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{token, setToken, loginApi, userinfo, setUserInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
