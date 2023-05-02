import {call, put, takeEvery} from 'redux-saga/effects';
import {REQUEST_CINEMAS, RECEIVE_CINEMAS} from '../types/CinemasTypes';
import {NowShowingApi} from '../../services/qfxApi';

const fetchCinemas = async () => {
  const response = await NowShowingApi('api/public/Cinemas');
  return response.data.data;
};

function* workCinemasFetch(): any {
  try {
    const cinemas = yield call(fetchCinemas);
    yield put({type: RECEIVE_CINEMAS, payload: cinemas});
  } catch (error) {
    console.log('Error =>', error);
  }
}

function* cinemasSaga(): any {
  yield takeEvery(REQUEST_CINEMAS, workCinemasFetch);
}

export default cinemasSaga;
