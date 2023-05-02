import React, {useContext, useEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import images from '@constants/images/images';
import colors from '@assets/colors/colors';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Dimensions';
import {AuthContext} from '@context/AuthContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fonts from '@constants/Fonts/Fonts';
import profiledata from '@mock/profiledata';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const CustomDrawer = (props: any) => {
  const {token, setToken} = useContext(AuthContext);

  const logOut = async () => {
    setToken('');
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const {
    headerLogoContainer,
    headerLogoStyle,
    NavBackground,
    logoutContainer,
    container,
    icon,
    textStyle,
    usernameStyle,
  } = styles;
  return (
    <View style={container}>
      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <View style={headerLogoContainer}>
          {!token ? (
            <Image source={images.headerLogo} style={headerLogoStyle} />
          ) : (
            <Text style={usernameStyle}> {profiledata?.name} </Text>
          )}
        </View>

        <View style={NavBackground}>
          <DrawerItemList {...props} />
        </View>
        {token ? (
          <>
            <TouchableOpacity onPress={logOut} style={logoutContainer}>
              <AntDesign name="logout" size={24} style={icon} />
              <Text style={textStyle}>Logout</Text>
            </TouchableOpacity>
          </>
        ) : null}
      </DrawerContentScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.drawerNavBackground,
    flex: 1,
  },
  headerLogoContainer: {
    backgroundColor: colors.logoBackground,
    height: verticalScale(100),
    marginTop: verticalScale(-5),
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(15),
  },
  headerLogoStyle: {
    height: '100%',
    width: '100%',
  },
  NavBackground: {
    flex: 1,
    paddingTop: verticalScale(10),
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(5),
  },
  icon: {
    marginLeft: horizontalScale(17),
    color: colors.primary,
    borderRadius: moderateScale(50),
    borderWidth: moderateScale(0.5),
    padding: moderateScale(8),
    backgroundColor: colors.offWhite,
    marginRight: horizontalScale(15),
  },
  textStyle: {
    fontSize: moderateScale(14),
    color: colors.primary,
    fontFamily: Fonts.type.poppinsregular,
  },
  usernameStyle: {
    fontSize: moderateScale(23),
    color: colors.primary,
  },
});
export default CustomDrawer;
