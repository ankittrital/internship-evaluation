import {
  REQUEST_COMINGSOON,
  RECEIVE_COMINGSOON,
  RECEIVE_COMINGSOON_ERROR,
} from '@redux/types/ComingSoon';
export const initialState = {
  request: false,
  comingsoon: [],
  error: null,
};
const ComingSoonReducers = (
  state = initialState,
  action: {type: any; payload: any; error: any},
) => {
  switch (action.type) {
    case REQUEST_COMINGSOON:
      return {
        ...state,
        request: true,
      };
    case RECEIVE_COMINGSOON:
      return {
        ...state,
        comingsoon: action.payload,
        request: false,
        error: null,
      };
    case RECEIVE_COMINGSOON_ERROR:
      return {
        ...state,
        request: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default ComingSoonReducers;
