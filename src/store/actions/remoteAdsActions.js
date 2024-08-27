import {SET_REMOTE_CONFIG} from '../types';
export const setRemoteAdsConfig = data => {
  return dispatch => {
    dispatch({
      type: SET_REMOTE_CONFIG,
      payload: data,
    });
  };
};