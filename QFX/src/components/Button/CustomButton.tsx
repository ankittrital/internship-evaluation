import colors from '@assets/colors/colors';
import Fonts from '@constants/Fonts/Fonts';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Dimensions';
import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ButtonProps {
  name: string;
  onPress: () => void;
}

/**
 * @author
 * @function @CustomButton
 **/

const CustomButton: FC<ButtonProps> = props => {
  const {container, LoginButtonStyle, buttonTextStyle} = styles;
  return (
    <View style={container}>
      <TouchableOpacity
        style={LoginButtonStyle}
        activeOpacity={0.8}
        onPress={props.onPress}>
        <Text style={buttonTextStyle}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: verticalScale(10),
  },
  LoginButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonColor,
    width: horizontalScale(295),
    height: verticalScale(45),
    borderRadius: moderateScale(5),
    elevation: 5,
  },
  buttonTextStyle: {
    fontFamily: Fonts.type.poppinsmedium,
    color: colors.offWhite,
    fontSize: 21,
  },
});

export default CustomButton;
