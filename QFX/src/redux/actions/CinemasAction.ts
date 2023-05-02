import {
  REQUEST_CINEMAS,
  RECEIVE_CINEMAS,
  RECEIVE_CINEMAS_SUCCESS,
} from '../types/CinemasTypes';
export const requestCinemas = () => ({
  type: REQUEST_CINEMAS,
});

export const receiveCinemas = (payload: any) => ({
  type: RECEIVE_CINEMAS,
  payload,
});

export const receiveCinemasSuccess = (payload: any) => ({
  type: RECEIVE_CINEMAS_SUCCESS,
  payload,
});
