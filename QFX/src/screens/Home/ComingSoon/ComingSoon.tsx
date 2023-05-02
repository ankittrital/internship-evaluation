import colors from '@assets/colors/colors';
import NowShowingView from '@components/NowShowingView/NowShowingView';
import {BASE_URL} from '@config/BaseUrl/urlconfig';
import Fonts from '@constants/Fonts/Fonts';
import {requestCinemas} from '@redux/actions/CinemasAction';
import {horizontalScale, verticalScale} from '@utils/Dimensions';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @ComingSoon
 **/

const ComingSoon: FC<IProps> = () => {
  const [cinemasData, setCinemasData] = useState([]);
  const dispatch = useDispatch();
  const cinemas = useSelector((state: any) => {
    return state.cinemas.cinemas;
  });

  useEffect(() => {
    dispatch(requestCinemas());
  }, [dispatch]);

  useEffect(() => {
    setCinemasData(cinemas);
  }, [cinemas]);

  const {container, flatList, parentContainer, theatreName, theatreNameText} =
    styles;

  return (
    <SafeAreaView style={parentContainer}>
      <View style={container}>
        <FlatList
          bouncesZoom={false}
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={flatList}
          data={cinemasData}
          keyExtractor={(show, index) => 'key' + index}
          renderItem={(show: any) => {
            return (
              <>
                <View style={theatreName}>
                  <Text style={theatreNameText}>{show.item.theatreName}</Text>
                </View>
                <FlatList
                  style={flatList}
                  data={show.item.events}
                  keyExtractor={(movie, index) => 'key' + index}
                  numColumns={2}
                  renderItem={(movie: any) => {
                    return (
                      <>
                        <NowShowingView
                          urlToImage={`${BASE_URL}${movie.item.thumbnailUrl}`}
                          name={movie.item.name}
                          eventRating={movie.item.eventRating}
                          date={movie.item.showDate}
                          trailer={movie.item.mediaLink}
                          genre={movie.item.genre}
                          runtime={movie.item.showLengthInMinutes}
                          director={movie.item.director}
                          cast={movie.item.cast}
                          synopsis={movie.item.annotation}
                          theatreID={movie.item?.theatreID}
                          eventID={movie.item?.eventID}
                          showDate={movie.item?.showDate}
                          city={movie.item?.city}
                          companyid={movie.item?.companyId}
                        />
                      </>
                    );
                  }}
                />
              </>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    marginRight: 10,
    justifyContent: 'center',
  },
  flatList: {},
  theatreName: {
    marginTop: verticalScale(2),
    marginLeft: horizontalScale(14),
  },
  theatreNameText: {
    fontSize: 23,
    color: colors.cinemasNameText,
    fontFamily: Fonts.type.poppinsbold,
  },
});
export default ComingSoon;
