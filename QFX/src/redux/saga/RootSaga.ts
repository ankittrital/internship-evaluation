import {all} from 'redux-saga/effects';
import nowShowing from '@redux/saga/NowShowingSaga';
import cinemasSaga from '@redux/saga/CinemasSaga';
import ComingSoonSaga from './ComingSoonSaga';

function* RootSaga() {
  yield all([nowShowing(), cinemasSaga(), ComingSoonSaga()]);
}
export default RootSaga;
