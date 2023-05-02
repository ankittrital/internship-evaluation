import {NowShowingApi} from '@services/qfxApi';
import {call, put, takeEvery} from 'redux-saga/effects';
import {
  REQUEST_COMINGSOON,
  RECEIVE_COMINGSOON,
  RECEIVE_COMINGSOON_ERROR,
} from '@redux/types/ComingSoon';

export const GetComingSoonApi = async () => {
  const response = await NowShowingApi('api/public/ComingSoon');
  return response.data.data;
};

function* GetComingSoon(): any {
  try {
    const comingsoon = yield call(GetComingSoonApi);
    yield put({type: RECEIVE_COMINGSOON, payload: comingsoon});
  } catch (e) {
    yield put({type: RECEIVE_COMINGSOON_ERROR, error: e});
  }
}
function* ComingSoonSaga(): any {
  yield takeEvery(REQUEST_COMINGSOON, GetComingSoon);
}
export default ComingSoonSaga;
