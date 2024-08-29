/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import remoteConfig from '@react-native-firebase/remote-config';
import Config from './env';
import { AdManager } from 'react-native-admob-native-ads';
remoteConfig().setConfigSettings({
  minimumFetchIntervalMillis: 3000,
});

AdManager.registerRepository({
  name: 'clipFeedNativeAd', 
  adUnitId: Config.NATIVE_AD_ID, 
  numOfAds: 20, 
  nonPersonalizedAdsOnly: true, 
  mediationEnabled: true, 
  mediationOptions: { 
    nativeBanner: true, 
  }, 
  expirationPeriod: 3000, // in milliseconds (optional) 
})
AppRegistry.registerComponent(appName, () => App);
