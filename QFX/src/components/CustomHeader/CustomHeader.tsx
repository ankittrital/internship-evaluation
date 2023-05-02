import colors from '@assets/colors/colors';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Dimensions';
import React, {FC, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '@constants/images/images';
import {useNavigation} from '@react-navigation/native';
import {navigationTypes} from '@navigation/types/navigationTypes';
import {AuthContext} from '@context/AuthContext';

interface IProps {}

/**
 * @author
 * @function @CustomHeader
 **/

const CustomHeader: FC<IProps> = () => {
  const {
    container,
    firstView,
    secondView,
    selectLocationStyle,
    headerLogo,
    imageStyle,
    toggleButtonStyle,
    selectLocationTextStyle,
    locationContainer,
  } = styles;
  const navigation = useNavigation<navigationTypes>();
  const toggleDrawer = () => {
    navigation.getParent('LeftDrawer').toggleDrawer();
  };
  const locationToogle = () => {
    Alert.alert('Feature Coming Soon');
  };

  const {token} = useContext(AuthContext);

  return (
    <View style={container}>
      {/* first */}
      <View style={firstView}>
        <TouchableOpacity onPress={toggleDrawer} style={toggleButtonStyle}>
          <Feather name="menu" size={26} color={colors.iconColor} />
        </TouchableOpacity>
        <View style={headerLogo}>
          <Image source={images.headerLogo} style={imageStyle} />
        </View>
      </View>
      {/* second */}
      <View style={secondView}>
        <View style={locationContainer}>
          <Ionicons
            name="location-outline"
            size={30}
            color={colors.iconColor}
          />

          <TouchableOpacity
            onPress={locationToogle}
            style={selectLocationStyle}>
            <Text style={selectLocationTextStyle}>Select Location</Text>
          </TouchableOpacity>
        </View>

        {/* //* Notification bell */}
        {token ? (
          <TouchableOpacity
            onPress={() => {
              console.log('Notification button pressed');
            }}>
            <Feather name="bell" size={26} color={colors.iconColor} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    width: '100%',
    height: verticalScale(65),
  },
  firstView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    height: verticalScale(50),
  },
  toggleButtonStyle: {
    marginLeft: horizontalScale(5),
  },
  secondView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',
    height: verticalScale(50),
    justifyContent: 'space-between',
  },
  selectLocationStyle: {
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.iconColor,
    marginLeft: horizontalScale(5),
  },
  headerLogo: {
    height: verticalScale(30),
    width: horizontalScale(70),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  selectLocationTextStyle: {
    color: colors.offWhite,
    fontSize: moderateScale(18),
  },
  locationContainer: {
    flexDirection: 'row',
  },
});

export default CustomHeader;
