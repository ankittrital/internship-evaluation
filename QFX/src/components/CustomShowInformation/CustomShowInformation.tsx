import colors from '@assets/colors/colors';
import Fonts from '@constants/Fonts/Fonts';
import {AuthContext} from '@context/AuthContext';
import {horizontalScale, moderateScale} from '@utils/Dimensions';
import React, {FC, useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {navigationTypes} from '@navigation/types/navigationTypes';
import FooterShowSelection from '@components/FooterShowSelection/FooterShowSelection';
interface IProps {
  data: [
    {
      theatreName: string;
      city: string;
      shows: [
        {
          showTime: string;
          isSoldOut: boolean;
          isFillingFast: boolean;
          isAvailable: boolean;
          isDisabled: boolean;
        },
      ];
    },
  ];
}

const CustomShowInformation: FC<IProps> = data => {
  const navigation = useNavigation<navigationTypes>();
  const [time, setTime] = useState<string>('');
  const [soldout, setSoldout] = useState<boolean>(false);
  const [fillingFast, setFillingFast] = useState<boolean>(false);
  const [available, setAvailable] = useState<boolean>(false);
  const [expired, setExpired] = useState<boolean>(false);

  const {
    container,
    leftContainer,
    rightContainer,
    timeInfoView,
    timeStyle,
    theatreNameStyle,
    cityStyle,
    parentContainer,
    flatListStyle,
  } = styles;

  const {token} = useContext(AuthContext);

  const redToSeatScreen = () => {
    if (token) {
      Alert.alert('Feature Coming Soon');
    } else {
      navigation.navigate('Login');
    }
  };

  let newDate = new Date(time);
  let hrs: string | number = newDate.getHours();
  let mins: string | number = newDate.getMinutes();
  if (hrs <= 9) {
    hrs = '0' + hrs;
  }
  if (mins < 10) {
    mins = '0' + mins;
  }
  const postTime: string = hrs + ':' + mins;

  return (
    <>
      <View style={parentContainer}>
        <FlatList
          data={data?.data}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={item => {
            return (
              <View style={container}>
                <View style={leftContainer}>
                  <Text style={theatreNameStyle}>
                    {item?.item?.theatreName}
                  </Text>
                  <Text style={cityStyle}>{item?.item?.city}</Text>
                </View>
                <FlatList
                  style={flatListStyle}
                  data={item?.item?.shows}
                  keyExtractor={(show, index) => 'key' + index}
                  renderItem={show => {
                    setTime(show?.item?.showTime);
                    show.item.isSoldOut === true &&
                      setSoldout(show?.item?.isSoldOut);
                    show.item.isFillingFast === true &&
                      setFillingFast(show?.item?.isFillingFast);
                    show.item.isAvailable === true &&
                      setAvailable(show?.item?.isAvailable);
                    show.item.isDisabled === true &&
                      setExpired(show?.item?.isDisabled);
                    return (
                      <>
                        <View style={rightContainer}>
                          <TouchableOpacity
                            style={[
                              timeInfoView,
                              soldout === true && {
                                borderColor: colors.headerNoticeBackground,
                              },
                              fillingFast === true && {
                                borderColor: colors.secondary,
                              },
                              available === true && {
                                borderColor: colors.iconColor,
                              },
                              expired === true && {
                                borderColor: colors.expiredColor,
                              },
                            ]}
                            onPress={redToSeatScreen}>
                            <Text style={timeStyle}>{postTime}</Text>
                            <Text>Hrs</Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    );
                  }}
                />
              </View>
            );
          }}
        />
      </View>
      <FooterShowSelection />
    </>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: colors.drawerNavBackground,
    padding: moderateScale(10),
    marginBottom: moderateScale(10),
    alignItems: 'center',
  },
  leftContainer: {
    paddingHorizontal: horizontalScale(10),
    borderRightWidth: 1,
    width: '30%',
    height: moderateScale(95),
    justifyContent: 'center',
    alignItems: 'center',
  },
  theatreNameStyle: {
    fontSize: moderateScale(15),
    color: colors.primary,
    textAlign: 'center',
    fontFamily: Fonts.type.poppinsbold,
  },
  cityStyle: {
    textAlign: 'center',
    fontSize: moderateScale(13),
    fontFamily: Fonts.type.poppinsregular,
  },
  rightContainer: {
    marginHorizontal: horizontalScale(5),
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
  },
  timeInfoView: {
    borderWidth: 1,
    borderRadius: moderateScale(50),
    width: moderateScale(75),
    height: moderateScale(75),
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeStyle: {
    fontSize: moderateScale(19),
  },
  flatListStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomShowInformation;
