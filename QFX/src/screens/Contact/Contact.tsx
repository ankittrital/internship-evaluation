import colors from '@assets/colors/colors';
import Fonts from '@constants/Fonts/Fonts';
import {verticalScale, moderateScale} from '@utils/Dimensions';
import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
} from 'react-native';
import images from '@constants/images/images';

interface IProps {}

/**
 * @author
 * @function @Contact
 **/

const Contact: FC<IProps> = () => {
  const {
    container,
    headerContainer,
    headerTextStyle,
    enquiryTextStyle,
    enquiryView,
    phoneNumberStyle,
    phoneTextStyle,
    teltextStyle,
    emailStyle,
  } = styles;
  const phoneNumber = '+9779813876466';
  const pageUrl = 'https://www.facebook.com/qfxcinemasnepal/?mibextid=ZbWKwL';
  const profileUrl = 'https://www.instagram.com/';
  const username = 'qfxcinemas_official';
  const email = 'support@qfxcinemas.com';
  const subject = 'Support';

  const phoneOnPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const emailOnPress = () => {
    Linking.openURL(`mailto:${email}?subject=${subject}`);
  };

  const viberOnPress = () => {
    Linking.openURL(`viber://pa?chatURI=viber://chat?number=%2B${phoneNumber}`);
  };

  const facebookOnPress = () => {
    if (Platform.OS === 'android') {
      Linking.openURL(
        'intent://www.facebook.com/qfxcinemasnepal/#Intent;package=com.facebook.katana;scheme=https;end',
      ).catch(() => {
        Linking.openURL(pageUrl);
      });
    } else {
      Linking.openURL('fb://page/qfxcinemasnepal').catch(() => {
        Linking.openURL(pageUrl);
      });
    }
  };

  const instagramOnPress = () => {
    if (Platform.OS === 'android') {
      Linking.openURL(
        `intent://instagram.com/_u/${username}/#Intent;package=com.instagram.android;scheme=https;end`,
      ).catch(() => {
        Linking.openURL(profileUrl);
      });
    } else {
      Linking.openURL(`instagram://user?username=${username}`).catch(() => {
        Linking.openURL(profileUrl);
      });
    }
  };
  const whatsappOnPress = () => {
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
  };
  const playstoreOnPress = () => {
    Linking.openURL('market://details?id=com.exolutus.qfxcinemas');
  };

  return (
    <View style={container}>
      {/* top view */}
      <View style={styles.firstContainer}>
        <View style={headerContainer}>
          <Text style={headerTextStyle}>CONTACT</Text>
        </View>
        <View style={enquiryView}>
          <Text style={enquiryTextStyle}>ENQUIRY</Text>
        </View>
        <View style={phoneNumberStyle}>
          <Text style={teltextStyle}>Tel: </Text>
          <TouchableOpacity onPress={phoneOnPress}>
            <Text style={phoneTextStyle}>+977-1-5522566</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={teltextStyle}>(Sun-Fri, 10am-6pm)</Text>
        </View>
        <View style={emailStyle}>
          <Text style={teltextStyle}>Email: </Text>
          <TouchableOpacity onPress={emailOnPress}>
            <Text style={phoneTextStyle}>support@qfxcinemas.com</Text>
          </TouchableOpacity>
        </View>
        <View style={enquiryView}>
          <Text style={enquiryTextStyle}>SOCIAL</Text>
        </View>
      </View>
      {/* 2nd View */}
      <View style={styles.secondView}>
        <View style={styles.secondTopContainer}>
          <TouchableOpacity
            onPress={viberOnPress}
            style={styles.touchableContainer}>
            <Image source={images.viber} style={styles.imageStyle} />
            <Text style={styles.socialTextStyle}>Connect us on Viber</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={facebookOnPress}
            style={styles.touchableContainer}>
            <Image source={images.facebook} style={styles.imageStyle} />
            <Text style={styles.socialTextStyle}>Like us on Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={instagramOnPress}
            style={styles.touchableContainer}>
            <Image source={images.instagram} style={styles.imageStyle} />
            <Text style={styles.socialTextStyle}>Follow us on Instagram</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.secondBottomContainer}>
          <TouchableOpacity
            onPress={whatsappOnPress}
            style={styles.touchableContainer}>
            <Image source={images.whatsapp} style={styles.imageStyle} />
            <Text style={styles.socialTextStyle}>Ping us on WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={playstoreOnPress}
            style={styles.touchableContainer}>
            <Image source={images.googleplay} style={styles.googleImageStyle} />
            <Text style={styles.socialTextStyle}>Rate us on PlayStore</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(25),
    backgroundColor: colors.background,
  },
  headerContainer: {
    backgroundColor: colors.offWhite,
    elevation: 5,
    width: '100%',
    height: verticalScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(15),
  },
  headerTextStyle: {
    fontSize: moderateScale(20),
    color: colors.cinemasNameText,
    letterSpacing: moderateScale(1),
  },
  enquiryTextStyle: {
    paddingTop: 10,
    fontSize: 20,
    color: colors.primary,
    fontFamily: Fonts.type.poppinslight,
  },
  enquiryView: {
    borderBottomWidth: 3,
    borderBottomColor: colors.buttonColor,
  },
  phoneNumberStyle: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  teltextStyle: {
    color: colors.primary,
    fontSize: 18,
  },
  phoneTextStyle: {
    fontSize: 18,
    color: colors.cinemasNameText,
  },
  emailStyle: {
    flexDirection: 'row',
  },
  firstContainer: {
    height: '40%',
    width: '100%',
  },
  secondView: {
    height: '60%',
  },
  secondTopContainer: {
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondBottomContainer: {
    height: '30%',
    flexDirection: 'row',
  },

  touchableContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
  },
  imageStyle: {
    height: '60%',
    width: '60%',
    resizeMode: 'contain',
  },
  socialTextStyle: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.type.poppinsregular,
    textAlign: 'center',
  },
  googleImageStyle: {
    height: 100,
    width: 140,
    flex: 1,
    resizeMode: 'contain',
  },
});

export default Contact;
