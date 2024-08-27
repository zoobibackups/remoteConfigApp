import {PURCHASE_ITEM, RESTORE_ITEM, SET_SHOW_APP_OEPN_AD} from '../types';

export const setCanShowAppOpenAds = data => {
  return dispatch => {
    dispatch({
      type: SET_SHOW_APP_OEPN_AD,
      payload: data,
    });
  };
};

export const restorePurchassedItems = data => {
  return dispatch => {
    dispatch({
      type: RESTORE_ITEM,
      payload: data,
    });
  };
};

export const purchaseProducts = data => {
  return dispatch => {
    dispatch({
      type: PURCHASE_ITEM,
      payload: data,
    });
  };
};
