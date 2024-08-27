import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import adReducer from './reducers/adReducer';
import remoteAdsReducer from './reducers/remoteAdsReducer';
import { mapsApi } from './services/mapsAPI';
import languageReducer from './reducers/laanguageReducer';
const adsTrackingConfig = {
  key: 'ads_track_config',
  storage: AsyncStorage,
  whitelist: ['productsPurchased', 'isPurchased'],
};

const languageReducerConfig = {
  key: 'languageReducerConfig',
  storage: AsyncStorage,
  whitelist: ['selectedLanguage', 'initialRoute'],
}

const rootReducer = combineReducers({
  [mapsApi.reducerPath]: mapsApi.reducer,
  remoteAdsReducer:remoteAdsReducer,
  languageReducer: persistReducer(languageReducerConfig, languageReducer),
  adReducer: persistReducer(adsTrackingConfig, adReducer),
 
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(mapsApi.middleware),
});
export const persistor = persistStore(store);
