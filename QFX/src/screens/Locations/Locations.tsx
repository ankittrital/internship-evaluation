import colors from '@assets/colors/colors';
import Fonts from '@constants/Fonts/Fonts';
import {verticalScale, moderateScale, horizontalScale} from '@utils/Dimensions';
import React, {FC} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import mockdata from '@mock/data';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @Locations
 **/

export const Locations: FC<IProps> = () => {
  const {
    container,
    headingContainer,
    headingTextStyle,
    flatListStyle,
    cinemaNameStyle,
    textStyle,
    headingTitleTextStyle,
    headingTitleContainer,
    iconStyleContainer,
    textStyleEnquiry,
    textStyle1,
    iconStyle,
    flatListContainer,
    mapStyle,
    mapTextStyle,
  } = styles;

  return (
    <View style={container}>
      <View style={headingContainer}>
        <Text style={headingTextStyle}>LOCATION</Text>
      </View>
      <View style={headingTitleContainer}>
        <Text style={headingTitleTextStyle}>THEATERS</Text>
      </View>

      <FlatList
        style={flatListStyle}
        showsVerticalScrollIndicator={false}
        data={mockdata}
        renderItem={({item}) => {
          return (
            <View style={flatListContainer}>
              <Text style={cinemaNameStyle}>{item.cinemaName}</Text>
              <Text style={textStyle1}>{item.location}</Text>
              <View style={iconStyleContainer}>
                <Text style={textStyleEnquiry}>Enquiries:</Text>
                <Feather
                  name="phone"
                  size={16}
                  color={colors.primary}
                  style={iconStyle}
                />
                <Text style={textStyle}> {item.phoneNumber}</Text>
              </View>
              <View style={iconStyleContainer}>
                <Ionicons
                  name="mail"
                  size={16}
                  color={colors.primary}
                  style={iconStyle}
                />
                <Text style={textStyle}>{item.email}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
      <View style={mapStyle}>
        <Text style={mapTextStyle}>Map renders here! </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  headingTitleTextStyle: {
    fontSize: moderateScale(20),
    color: colors.cinemasNameText,
  },
  headingTitleContainer: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: verticalScale(5),
    marginTop: verticalScale(-3),
    paddingBottom: verticalScale(4),
    paddingLeft: horizontalScale(2),
  },
  dataContainer: {
    backgroundColor: colors.offWhite,
  },
  flatListStyle: {
    backgroundColor: colors.offWhite,
    width: '100%',
    paddingHorizontal: horizontalScale(10),
    height: '47%',
  },
  cinemaNameStyle: {
    paddingVertical: moderateScale(10),
    fontSize: 23,
    color: colors.primary,
    fontFamily: Fonts.type.poppinsregular,
  },
  textStyle: {
    color: colors.primary,
    marginLeft: horizontalScale(3),
    fontSize: moderateScale(15),
  },
  iconStyleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyleEnquiry: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
  textStyle1: {
    color: colors.primary,
    fontSize: moderateScale(15),
  },
  iconStyle: {
    marginTop: verticalScale(2),
  },
  flatListContainer: {
    marginBottom: verticalScale(10),
  },
  mapStyle: {
    backgroundColor: '#E8E6DC',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '28%',
    marginBottom: verticalScale(10),
  },
  mapTextStyle: {
    fontSize: moderateScale(28),
    fontFamily: Fonts.type.poppinssemibold,
    color: colors.primary,
  },
});

export default Locations;
