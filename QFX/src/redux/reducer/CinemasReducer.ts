import {
  REQUEST_CINEMAS,
  RECEIVE_CINEMAS,
  RECEIVE_CINEMAS_SUCCESS,
} from '../types/CinemasTypes';

export const initialState = {
  isFetching: false,
  cinemas: [],
};

const cinemaReducers = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case REQUEST_CINEMAS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_CINEMAS:
      return {
        ...state,
        cinemas: action.payload,
      };
    case RECEIVE_CINEMAS_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default cinemaReducers;
