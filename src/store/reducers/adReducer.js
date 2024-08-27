import {PURCHASE_ITEM, RESTORE_ITEM, SET_SHOW_APP_OEPN_AD} from '../types';
const initialState = {
  canShowAppOpenAd: true,
  productsPurchased: [],
  isPurchased: false,
  item: {
    productId: null,
    transactionDate: null,
  },
};
const adReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_APP_OEPN_AD:
      return {
        ...state,
        canShowAppOpenAd: action.payload,
      };
    case RESTORE_ITEM:
      return {
        ...state,
        isPurchased: true,
        productsPurchased: [action.payload, ...state.productsPurchased],
      };
    case PURCHASE_ITEM:
      return {
        ...state,
        isPurchased: true,
        productsPurchased: [action.payload, ...state.productsPurchased],
      };
    default:
      return state;
  }
};
export default adReducer;
