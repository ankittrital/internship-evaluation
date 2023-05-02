import colors from '@assets/colors/colors';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Dimensions';
import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import Fonts from '@constants/Fonts/Fonts';
import {navigationTypes} from '@navigation/types/navigationTypes';

interface IProps {}

/**
 * @author
 * @function @CustomHeader
 **/

type RouteTypes = {
  key: string;
  name: string;
  params: {
    name: string;
  };
};

const CustomScreenHeader: FC<IProps> = () => {
  const {container, firstView, secondView, toggleButtonStyle, headerText} =
    styles;
  const navigation = useNavigation<navigationTypes>();
  const toggleDrawer = () => {
    navigation.goBack();
  };
  const route = useRoute<RouteTypes>();
  const {name} = route.params;

  return (
    <View style={container}>
      {/* first */}
      <View style={firstView}>
        <TouchableOpacity onPress={toggleDrawer} style={toggleButtonStyle}>
          <Ionicons name="arrow-back" size={26} color={colors.iconColor} />
        </TouchableOpacity>
      </View>
      {/* second */}
      <View style={secondView}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={headerText}>
          {route.name === 'Home' ? 'Home' : name}
        </Text>
      </View>
      {/* third */}
      <View style={firstView} />
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
    height: verticalScale(50),
    width: '10%',
  },
  toggleButtonStyle: {
    marginLeft: horizontalScale(5),
  },
  secondView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(40),
    width: '80%',
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
  headerText: {
    color: colors.offWhite,
    fontSize: moderateScale(19),
    fontFamily: Fonts.type.poppinsregular,
  },
});

export default CustomScreenHeader;
