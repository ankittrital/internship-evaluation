import React, {FC, useEffect} from 'react';
import {Provider} from 'react-redux';
import Store from '@redux/store/Store';
import StackNav from '@navigation/Stack/StackNav';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthProvider} from '@context/AuthContext';
import CompareAppVersion from '@utils/CompareAppVersion';
import CheckInternet from '@components/ToastMessage/CheckInternet';

interface IProps {}

/**
 * @author
 * @function @Root
 **/

const Root: FC<IProps> = () => {
  useEffect(() => {
    CompareAppVersion();
  }, []);

  return (
    <AuthProvider>
      <Provider store={Store}>
        <PaperProvider>
          <StackNav />
          <CheckInternet />
        </PaperProvider>
      </Provider>
    </AuthProvider>
  );
};
export default Root;
