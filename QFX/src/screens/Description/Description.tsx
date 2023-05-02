import colors from '@assets/colors/colors';
import log from '@config/loggerconfig/LoggerConfig';
import Fonts from '@constants/Fonts/Fonts';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Dimensions';
import youtubeParser from '@utils/youtubeParser';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DescriptionApi} from '@services/qfxApi';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  props: any;
  children: any;
}

/**
 * @author
 * @function @Description
 **/

const Description: FC<IProps> = props => {
  const [description, setDescription] = useState<{
    name: string;
    eventRating: string;
    genre: string | null;
    lengthInMinutes: number | null;
    cast: string | null;
    directorName: string | null;
    annotation: string | null;
  }>();
  const [playing, setPlaying] = useState<boolean>(false);
  const onStateChange = useCallback((state: any) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  const navigation = useNavigation<any>();
  const {showDate, companyid, city} = props.props;
  let newMovieInfo = {
    ...description,
    showDate,
    city,
    companyid,
  };
  const navtoShowSelection = () => {
    navigation.navigate('ShowSelection', newMovieInfo);
  };
  const url = youtubeParser(props.props.trailer);
  useEffect(() => {
    DescriptionApi(
      props?.props?.eventID ? props?.props?.eventID : props?.props?.id,
    )
      .then(res => {
        setDescription(res?.data?.data);
      })
      .catch(error => {
        log.error('error while fetching movie details=>', error);
      });
  }, [props.props.eventID, props.props.id]);

  const {
    container,
    titleView,
    titleStyle,
    titleTextContainer,
    iconContainer,
    ticketTextStyle,
    touchable,
    miscDetailsText,
    miscDetails,
    synopsisStyle,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <View>
        <YoutubePlayer
          height={240}
          play={playing}
          videoId={url}
          onChangeState={onStateChange}
        />
      </View>
      <View style={titleTextContainer}>
        <View style={titleView}>
          <Text style={titleStyle}>
            {' '}
            {description?.name} ({description?.eventRating})
          </Text>
        </View>
        {props?.props?.theatreID ? (
          <TouchableOpacity style={touchable} onPress={navtoShowSelection}>
            <View style={iconContainer}>
              <FontAwesome name="ticket" size={22} color={colors.primary} />
            </View>
            <View>
              <Text style={ticketTextStyle}>Buy/Reverse Ticket</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={miscDetails}>
        <Text style={miscDetailsText}>
          Genre: {description?.genre ? description.genre : 'N/A'}
        </Text>
        <Text style={miscDetailsText}>
          Runtime:{' '}
          {description?.lengthInMinutes ? description.lengthInMinutes : 'N/A'}
        </Text>
        <Text style={miscDetailsText}>
          Director:{' '}
          {description?.directorName ? description.directorName : 'N/A'}
        </Text>
        <Text style={miscDetailsText}>
          Cast: {description?.cast ? description.cast : 'N/A'}
        </Text>
      </View>
      <View style={synopsisStyle}>
        <Text style={miscDetailsText}>
          SYNOPSIS: {description?.annotation ? description.annotation : 'N/A'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
  titleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleView: {
    flexDirection: 'row',
    paddingLeft: horizontalScale(10),
    width: '60%',
  },
  titleStyle: {
    fontFamily: Fonts.type.poppinsmedium,
    fontSize: 20,
    color: colors.primary,
  },
  iconContainer: {
    flexDirection: 'row',
    padding: moderateScale(8),
    borderRadius: moderateScale(50),
    borderWidth: moderateScale(0.5),
    backgroundColor: colors.offWhite,
  },

  ticketTextStyle: {
    padding: moderateScale(10),
    fontSize: moderateScale(10),
    marginTop: moderateScale(5),
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  miscDetails: {
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
  },
  miscDetailsText: {
    fontSize: moderateScale(12),
    letterSpacing: moderateScale(0.2),
    fontFamily: Fonts.type.poppinsregular,
    color: colors.primary,
  },
  synopsisStyle: {
    paddingHorizontal: horizontalScale(10),
  },
});
export default Description;
