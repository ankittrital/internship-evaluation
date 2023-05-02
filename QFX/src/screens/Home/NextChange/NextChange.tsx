import colors from '@assets/colors/colors';
import NowShowingView from '@components/NowShowingView/NowShowingView';
import {BASE_URL} from '@config/BaseUrl/urlconfig';
import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestComingSoon} from '@redux/actions/ComingSoonAction';

interface IProps {}

/**
 * @author   Ankit D Trital
 * @function @NowShowing
 **/

const NowShowing: FC<IProps> = () => {
  const [comingSoonData, setComingSoon] = useState([]);
  const dispatch = useDispatch();
  const comingSoon = useSelector((state: any) => {
    return state.comingSoon.comingsoon;
  });

  useEffect(() => {
    dispatch(requestComingSoon());
  }, [dispatch]);

  useEffect(() => {
    setComingSoon(comingSoon);
  }, [comingSoon]);

  const {container, flatList, parentContainer} = styles;

  return (
    <SafeAreaView style={parentContainer}>
      <View style={container}>
        <FlatList
          bouncesZoom={false}
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={flatList}
          data={comingSoonData}
          keyExtractor={(movie, index) => 'key' + index}
          numColumns={2}
          renderItem={(movie: any) => {
            return (
              <>
                <NowShowingView
                  urlToImage={`${BASE_URL}${movie.item.thumbnailUrl}`}
                  name={movie.item.name}
                  eventRating={movie.item.eventRating}
                  date={movie.item.dtLocalRelease}
                  trailer={movie.item.mediaPlayerTrailerURL}
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
                  id={movie.item?.id}
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
});

export default NowShowing;
