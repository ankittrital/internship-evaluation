import colors from '@assets/colors/colors';
import CustomShowInformation from '@components/CustomShowInformation/CustomShowInformation';
import CustomSwitch from '@components/CustomSwitch/CustomSwitch';
import {BASE_URL} from '@config/BaseUrl/urlconfig';
import Fonts from '@constants/Fonts/Fonts';
import {ShowSelectionApi} from '@services/qfxApi';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Dimensions';
import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView, Image, Text} from 'react-native';
import {dayGenerator} from '@utils/DayGenerator';
import monthGenerator from '@utils/MonthGenerator';

interface IProps {
  props: any;
  children: any;
}

/**
 * @author  Ankit D Trital
 * @function @ShowSelection
 **/

const ShowSelection: FC<IProps> = props => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
  const [theaterInfo, setTheaterInfo] = useState<any>([]);
  const [eventName, setEventName] = useState<string>('');
  const {id, showDate} = props.props;

  const dateInfo = monthGenerator(new Date());
  const date2 = `${dateInfo.date + 1}`;
  const date3 = `${dateInfo.date + 2}`;

  const Day = dayGenerator();
  const newDate = showDate.substring(0, 10);

  useEffect(() => {
    ShowSelectionApi(id, newDate)
      .then((res): any => {
        setTheaterInfo(res?.data?.data?.showTheatres);
        setThumbnailUrl(res?.data?.data?.thumbnailUrl);
        setEventName(res?.data?.data?.eventName);
      })

      .catch(err => {
        console.log('Error while showing selection movie information: ', err);
      });
  }, [id, newDate]);

  const {
    imageContainer,
    imageStyle,
    movieNameContainer,
    movieNameStyle,
    container,
  } = styles;

  const [gameTab, setGameTab] = useState(1);

  const onSelectSwitch = (value: number) => {
    setGameTab(value);
  };

  return (
    <SafeAreaView style={container}>
      <View style={imageContainer}>
        <Image
          style={imageStyle}
          source={{uri: `${BASE_URL}${thumbnailUrl}`}}
        />
      </View>
      <View style={movieNameContainer}>
        <Text style={movieNameStyle} numberOfLines={1} ellipsizeMode="tail">
          {eventName}
        </Text>
      </View>
      <View>
        <CustomSwitch
          selectionMode={1}
          button1="Today"
          button2="Tomorrow"
          button3={Day}
          date1={dateInfo.month + ' ' + dateInfo.date}
          date2={dateInfo.month + ' ' + date2}
          date3={dateInfo.month + ' ' + date3}
          onSelectSwitch={onSelectSwitch}
        />
      </View>
      {gameTab === 1 && <CustomShowInformation data={theaterInfo} />}
      {gameTab === 2 && <CustomShowInformation data={theaterInfo} />}
      {gameTab === 3 && <CustomShowInformation data={theaterInfo} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  imageContainer: {
    height: verticalScale(200),
    width: horizontalScale(130),
    marginVertical: verticalScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  movieNameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.buttonColor,
  },
  movieNameStyle: {
    fontSize: moderateScale(22),
    color: colors.primary,
    letterSpacing: 1,
    fontFamily: Fonts.type.poppinsregular,
  },
});
export default ShowSelection;
