import colors from '@assets/colors/colors';
import Fonts from '@constants/Fonts/Fonts';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Dimensions';
import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import profiledata from '@mock/profiledata';
import QRCode from 'react-native-qrcode-svg';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @MyProfile
 **/

const MyProfile: FC<IProps> = () => {
  const handleEditButton = () => {
    Alert.alert('Edit Profile Button Clicked');
  };

  const {
    parentContainer,
    headerTextStyle,
    headingContainer,
    userDetails,
    userDetailsText,
    userDetailsTextHeader,
    qrcodeContainer,
    qrCaption,
    editContainer,
    editButtonTextStyle,
    buttonStyle,
  } = styles;

  const {name, email, location, mobile} = profiledata;
  const qrcodestring = JSON.stringify(profiledata);

  return (
    <SafeAreaView style={parentContainer}>
      <View style={headingContainer}>
        <Text style={headerTextStyle}>MY PROFILE</Text>
      </View>
      <View style={userDetails}>
        <Text style={userDetailsTextHeader}>{name}</Text>
        <Text style={userDetailsText}>{mobile}</Text>
        <Text style={userDetailsText}>{email}</Text>
        <Text style={userDetailsText}>{location}</Text>
      </View>
      <View style={qrcodeContainer}>
        <QRCode
          value={qrcodestring}
          size={200}
          color={colors.primary}
          backgroundColor={colors.darkGray}
        />
      </View>
      <Text style={qrCaption}>
        NOTE: This QR Code contains only your QFX account identity.
      </Text>
      <View style={editContainer}>
        <TouchableOpacity style={buttonStyle} onPress={handleEditButton}>
          <Text style={editButtonTextStyle}>EDIT PROFILE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
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
  headerTextStyle: {
    fontFamily: Fonts.type.poppinsregular,
    fontSize: moderateScale(20),
    color: colors.cinemasNameText,
    letterSpacing: moderateScale(1),
  },
  userDetails: {
    width: '100%',
    marginTop: verticalScale(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDetailsTextHeader: {
    fontSize: moderateScale(25),
    color: colors.primary,
    fontFamily: Fonts.type.poppinsregular,
  },

  userDetailsText: {
    fontSize: moderateScale(15),
    color: colors.primary,
    fontFamily: Fonts.type.poppinsregular,
  },
  qrcodeContainer: {
    width: horizontalScale(250),
    height: verticalScale(250),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  qrCaption: {
    marginTop: verticalScale(5),
    fontSize: moderateScale(13),
    textAlign: 'center',
    color: colors.primary,
    fontFamily: Fonts.type.poppinsregular,
  },
  editContainer: {
    backgroundColor: colors.editButton,
    elevation: 5,
    width: '95%',
    height: verticalScale(45),
    borderRadius: moderateScale(5),
    marginVertical: verticalScale(15),
    marginHorizontal: horizontalScale(10),
  },
  editButtonTextStyle: {
    fontFamily: Fonts.type.poppinsregular,
    fontSize: moderateScale(20),
    color: colors.offWhite,
    letterSpacing: moderateScale(1),
    textAlign: 'center',
    paddingTop: moderateScale(5),
  },
  buttonStyle: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default MyProfile;
