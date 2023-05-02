import {NowShowingApi} from '@services/qfxApi';
import {call, put, takeEvery} from 'redux-saga/effects';
import {
  REQUEST_API_DATA,
  RECEIVE_API_DATA,
  RECEIVE_API_ERROR,
} from '@redux/types/ReduxTypes';

export const GetNowShowingApi = async () => {
  const response = await NowShowingApi('api/public/NowShowing');
  return response.data.data;
};
function* GetNowShowing(): any {
  try {
    const nowShowing = yield call(GetNowShowingApi);
    yield put({type: RECEIVE_API_DATA, payload: nowShowing});
  } catch (e) {
    yield put({type: RECEIVE_API_ERROR, error: e});
  }
}
function* NowShowingSaga(): any {
  yield takeEvery(REQUEST_API_DATA, GetNowShowing);
}
export default NowShowingSaga;
