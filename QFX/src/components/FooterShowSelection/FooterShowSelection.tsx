import colors from '@assets/colors/colors';
import Fonts from '@constants/Fonts/Fonts';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Dimensions';
import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @FooterShowSelection
 **/

const FooterShowSelection: FC<IProps> = () => {
  const {container, footerBorderStyle, footerTextStyle} = styles;
  return (
    <View style={container}>
      <View
        style={[
          footerBorderStyle,
          {borderColor: colors.headerNoticeBackground},
        ]}
      />
      <Text style={footerTextStyle}>Sold Out</Text>
      <View style={[footerBorderStyle, {borderColor: colors.secondary}]} />
      <Text style={footerTextStyle}>Filling Fast</Text>
      <View style={[footerBorderStyle, {borderColor: colors.iconColor}]} />
      <Text style={footerTextStyle}>Available</Text>
      <View style={[footerBorderStyle, {borderColor: colors.expiredColor}]} />
      <Text style={footerTextStyle}>Expired</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.drawerNavBackground,
    flexDirection: 'row',
    height: verticalScale(40),
  },
  footerBorderStyle: {
    borderRadius: 50,
    borderWidth: 2,
    width: 25,
    height: 25,
  },
  footerTextStyle: {
    marginHorizontal: horizontalScale(2),
    fontSize: moderateScale(12),
    fontFamily: Fonts.type.poppinsregular,
  },
});

export default FooterShowSelection;
