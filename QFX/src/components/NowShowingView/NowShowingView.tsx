import colors from '@assets/colors/colors';
import Fonts from '@constants/Fonts/Fonts';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Dimensions';

import React, {FC} from 'react';
import moment from 'moment';
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {navigationTypes} from '@navigation/types/navigationTypes';

interface NowShowingProps {
  urlToImage: string;
  name: string;
  eventRating: string;
  date?: string;
  trailer: string;
  genre: string;
  runtime: number;
  director: string;
  cast: string;
  synopsis: string;
  theatreID: number;
  eventID?: number;
  showDate?: string;
  city: string;
  company?: string;
  companyid: number;
  id?: number;
}

const NowShowingView: FC<NowShowingProps> = props => {
  const {
    container,
    image,
    imageContainer,
    movieInfo,
    movieTitle,
    rating,
    release,
    touchableContainer,
  } = styles;
  const navigation = useNavigation<navigationTypes>();
  const navToDesc = () => {
    navigation.navigate('DescriptionWrapper', {
      name: props.name,
      eventRating: props.eventRating,
      trailer: props.trailer,
      genre: props.genre,
      runtime: props.runtime,
      director: props.director,
      cast: props.cast,
      synopsis: props.synopsis,
      theatreID: props.theatreID,
      eventID: props?.eventID,
      showDate: props?.showDate,
      city: props?.city,
      companyid: props?.companyid,
      id: props?.id,
    });
  };

  const newDate = props.date && moment(props?.date).format('MMM D, YYYY');
  return (
    <SafeAreaView style={container}>
      <TouchableOpacity onPress={navToDesc} style={touchableContainer}>
        <View style={imageContainer}>
          <Image style={image} source={{uri: props.urlToImage}} />
        </View>
        <View style={movieInfo}>
          <Text style={movieTitle}>{props.name}</Text>
          <Text style={rating}>({props.eventRating})</Text>
          <Text style={release}>{newDate}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(10),
  },
  imageContainer: {
    height: horizontalScale(200),
    marginLeft: horizontalScale(10),
  },
  image: {
    width: horizontalScale(170),
    height: verticalScale(250),
  },
  movieInfo: {},
  movieTitle: {
    marginTop: verticalScale(25),
    fontSize: moderateScale(15),
    textAlign: 'left',
    color: colors.primary,
    marginLeft: horizontalScale(10),
    fontFamily: Fonts.type.poppinsregular,
  },
  rating: {
    marginRight: horizontalScale(15),
    fontSize: moderateScale(14),
    flexDirection: 'row',
    color: colors.primary,
    marginLeft: horizontalScale(10),
    fontFamily: Fonts.type.poppinsregular,
  },
  release: {
    fontSize: moderateScale(14),
    flexDirection: 'row',
    color: colors.primary,
    marginLeft: horizontalScale(10),
    fontFamily: Fonts.type.poppinsregular,
  },
  touchableContainer: {},
});
export default NowShowingView;
