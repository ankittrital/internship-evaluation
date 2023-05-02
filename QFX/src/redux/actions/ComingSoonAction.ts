import {
  REQUEST_COMINGSOON,
  RECEIVE_COMINGSOON,
  RECEIVE_COMINGSOON_ERROR,
} from '@redux/types/ComingSoon';

export const requestComingSoon = () => ({
  type: REQUEST_COMINGSOON,
});

export const receiveComingSoon = (payload: any) => ({
  type: RECEIVE_COMINGSOON,
  payload,
});
export const receiveComingSoonerror = (payload: any) => ({
  type: RECEIVE_COMINGSOON_ERROR,
  payload,
});
