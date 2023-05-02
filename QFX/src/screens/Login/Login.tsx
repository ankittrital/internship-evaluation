import colors from '@assets/colors/colors';
import CustomButton from '@components/Button/CustomButton';
import TextInput from '@components/TextInput/TextInput';
import Fonts from '@constants/Fonts/Fonts';
import images from '@constants/images/images';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Dimensions';
import React, {FC, useState, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  Keyboard,
} from 'react-native';
import {navigationTypes} from '@navigation/types/navigationTypes';
import {AuthContext} from '@context/AuthContext';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @Login
 **/

const Login: FC<IProps> = () => {
  const {
    container,
    firstContainer,
    imageStyle,
    textStyle,
    secondContainer,
    thirdContainer,
    textStyle2,
  } = styles;

  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      navigation.navigate('Home');
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('user cancelled the login flow=>', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
      }
    }
  };

  const {loginApi} = useContext(AuthContext);

  const navigation = useNavigation<navigationTypes>();
  const navToRegister = () => {
    navigation.navigate('Register');
  };

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const handleOnchange = (text: any, input: any) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error: any, input: any) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };
  const login = () => {
    loginApi(inputs);
  };
  return (
    <ScrollView style={container}>
      {/* First */}
      <View style={firstContainer}>
        <Image source={images.loginHeader} style={imageStyle} />
      </View>
      {/* Second */}
      <View style={secondContainer}>
        <TextInput
          name="user-o"
          size={35}
          type={'FontAwesome'}
          color={colors.primary}
          placeholder={'Email/Mobile Number'}
          value={inputs.email}
          onChangeText={(text: any) => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          error={errors.email}
        />
        <TextInput
          name={'key'}
          size={35}
          type={'FontAwesome'}
          color={colors.primary}
          placeholder={'Enter Your Password'}
          value={inputs.password}
          onChangeText={(text: any) => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          secureTextEntry
          error={errors.password}
        />
      </View>
      {/* Third */}
      <View style={thirdContainer}>
        <CustomButton name="Login" onPress={validate} />
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={textStyle}>Forget Password?</Text>
        </TouchableOpacity>
        <Text style={textStyle2}>Don't have QFX account?</Text>
        <CustomButton name="Register" onPress={navToRegister} />
      </View>
      <View>
        <CustomButton name="Sign in With Google" onPress={googleSignIn} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  firstContainer: {
    height: verticalScale(109),
    width: horizontalScale(100),
    borderRadius: moderateScale(50),
    marginTop: verticalScale(80),
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  secondContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: moderateScale(50),
  },
  textStyle: {
    color: colors.primary,
    marginBottom: 15,
    marginTop: 8,
    fontFamily: Fonts.type.poppinsregular,
  },
  textStyle2: {
    fontFamily: Fonts.type.poppinslight,
  },
});

export default Login;
