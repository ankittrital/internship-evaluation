import colors from '@assets/colors/colors';
import NowShowingView from '@components/NowShowingView/NowShowingView';
import {BASE_URL} from '@config/BaseUrl/urlconfig';
import log from '@config/loggerconfig/LoggerConfig';
import {requestApiData} from '@redux/actions/NowShowingAction';
import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @NowShowing
 **/

const NowShowing: FC<IProps> = () => {
  const {container, flatList, parentContainer} = styles;
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const nowShowing = useSelector((state: any) => {
    return state.nowShowing.nowShowingData;
  });

  useEffect(() => {
    dispatch(requestApiData());
  }, [dispatch]);

  useEffect(() => {
    setMovies(nowShowing);
  }, [nowShowing]);
  return (
    <SafeAreaView style={parentContainer}>
      <View style={container}>
        <FlatList
          bouncesZoom={false}
          showsVerticalScrollIndicator={false}
          style={flatList}
          data={movies}
          keyExtractor={(movie, index) => 'key' + index}
          numColumns={2}
          renderItem={(movie: any) => {
            return (
              <>
                <NowShowingView
                  urlToImage={`${BASE_URL}${movie.item.thumbnailUrl}`}
                  name={movie.item.name}
                  eventRating={movie.item.eventRating}
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    marginRight: 10,
    justifyContent: 'center',
  },
  flatList: {},
});

export default NowShowing;
