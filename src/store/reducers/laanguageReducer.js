import {SET_LANGUAGE, INITIAL_ROUTE} from '../types';
const initialState = {
  selectedLanguage: 'en',
  initialRoute: 'LanguageScreen',
};
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case INITIAL_ROUTE:
      return{
        ...state,
        initialRoute:action.payload
      }
    default:
      return state;
  }
};
export default languageReducer;
