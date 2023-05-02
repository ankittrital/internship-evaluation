import {
  REQUEST_API_DATA,
  RECEIVE_API_DATA,
  RECEIVE_API_ERROR,
} from '@redux/types/ReduxTypes';

export const requestApiData = () => ({
  type: REQUEST_API_DATA,
});

export const receiveApiData = (payload: any) => ({
  type: RECEIVE_API_DATA,
  payload,
});

export const receiveApiError = (payload: any) => ({
  type: RECEIVE_API_ERROR,
  payload,
});
