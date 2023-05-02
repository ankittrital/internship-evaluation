import colors from '@assets/colors/colors';
import CustomButton from '@components/Button/CustomButton';
import FormInput from '@components/TextInput/TextInput';
import Fonts from '@constants/Fonts/Fonts';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Dimensions';
import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @Register
 **/

const Register: FC<IProps> = () => {
  const {
    container,
    headingContainer,
    headingTextStyle,
    secondContainer,
    termsStyle,
    termsAndConditions,
    termsText,
  } = styles;

  const [fullname, setFullname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);

  return (
    <ScrollView style={container}>
      <View style={headingContainer}>
        <Text style={headingTextStyle}>REGISTER</Text>
      </View>
      <View style={secondContainer}>
        <FormInput
          name="user"
          size={35}
          type={'FontAwesome'}
          color={colors.primary}
          value={fullname}
          placeholder={'Full Name'}
          onChangeText={setFullname}
        />
        <FormInput
          name={'email'}
          size={35}
          type={'Entypo'}
          color={colors.primary}
          value={email}
          placeholder={'Email'}
          onChangeText={setEmail}
        />
        <FormInput
          name={'phone'}
          size={35}
          type={'AntDesign'}
          color={colors.primary}
          value={mobile}
          placeholder={'Mobile'}
          onChangeText={setMobile}
        />
        <FormInput
          name={'key'}
          size={35}
          type={'FontAwesome'}
          color={colors.primary}
          value={password}
          placeholder={'Password'}
          onChangeText={setPassword}
          secureTextEntry
        />
        <FormInput
          name={'key'}
          size={35}
          type={'FontAwesome'}
          color={colors.primary}
          value={password2}
          placeholder={'Confirm Password'}
          onChangeText={setPassword2}
          secureTextEntry
        />
        <FormInput
          name={'location'}
          size={50}
          type={'EvilIcon'}
          color={colors.primary}
          value={location}
          placeholder={'Prefered Location'}
          onChangeText={setLocation}
        />
      </View>
      <TouchableOpacity style={termsAndConditions}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <View style={termsText}>
          <Text>
            I have read and accepted the Terms of the Use and Privacy Policy
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <CustomButton name={'SIGN UP'} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(25),
    backgroundColor: colors.background,
  },
  headingContainer: {
    backgroundColor: colors.offWhite,
    elevation: 5,
    width: '100%',
    height: verticalScale(45),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(15),
  },
  headingTextStyle: {
    fontFamily: Fonts.type.poppinsregular,
    fontSize: moderateScale(20),
    color: colors.cinemasNameText,
    letterSpacing: moderateScale(1),
  },
  secondContainer: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  checkBoxStyle: {
    borderWidth: moderateScale(1),
  },
  termsAndConditions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  termsText: {
    flexDirection: 'row',
  },
  termsStyle: {
    fontSize: moderateScale(12),
    color: colors.cinemasNameText,
    fontFamily: Fonts.type.poppinsregular,
  },
});

export default Register;
