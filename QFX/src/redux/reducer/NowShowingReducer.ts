import {
  REQUEST_API_DATA,
  RECEIVE_API_DATA,
  RECEIVE_API_ERROR,
} from '@redux/types/ReduxTypes';

export const initialState = {
  request: false,
  nowShowingData: [],
  error: null,
};

const nowShowingReducer = (
  state = initialState,
  action: {type: any; payload: any; error: any},
) => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        request: true,
      };
    case RECEIVE_API_DATA:
      return {
        ...state,
        nowShowingData: action.payload,
        request: false,
        error: null,
      };
    case RECEIVE_API_ERROR:
      return {
        ...state,
        request: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default nowShowingReducer;
