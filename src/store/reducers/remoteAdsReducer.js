import {SET_REMOTE_CONFIG} from '../types';
const initialState = {
  AddsConfig: {
    INTER_HOME: false,
    INTER_SPLASH: true,
    NATIVE_LANGUAGE: true,
    NATIVE_IMAGE: false,
    NATIVE_MEDIA: false,
    BANNER: true,
    APP_OPEN_AD_ID: false,
    SPEED_METER_SCREEN_NATIVE_AD: true,
    ISD_CODE_SCREEN_NATIVE_AD_ID: true,
    COMPASS_SCREEN_NATIVE_AD_ID: true,
    AREA_CODE_SCREEN_NATIVE_AD_ID: true,
    ALTITUDDE_SCREEEN_NATIVE_AD_ID: true,
    HOME_SCREEN_NATIVE_AD_ID: true,
  },
};
const remoteAdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REMOTE_CONFIG:
      return {
        ...state,
        AddsConfig: action.payload,
      };

    default:
      return state;
  }
};
export default remoteAdsReducer;
