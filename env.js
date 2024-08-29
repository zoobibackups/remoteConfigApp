import { Platform } from 'react-native';
import { TestIds } from 'react-native-admob-native-ads';
import { TestIds as GTest } from 'react-native-google-mobile-ads';
const Config = {
  MAP_API: 'AIzaSyAwH_rp-6rIrnF2zfl_VXOX7n1h_Dz1-iQ',
  MAP_BOX:
    'sk.eyJ1IjoibWV0YXNvbHRlY2hub2xvZ2llcyIsImEiOiJjbGNzdThtaHMwcHg5M25wMG13amN0Y3JyIn0.7ZM7V3HRoDTOXT6TZHLMiw',
  APP_AD_ID:
    Platform.OS == 'android'
      ? 'ca-app-pub-7948985703666296~9553401289'
      : 'ca-app-pub-4583708687352330~9108490214',
  INTERSTIAL_AD_ID: __DEV__
    ? GTest.INTERSTITIAL
    : Platform.OS == 'android'
      ? 'ca-app-pub-7948985703666296/6756132962'
      : 'ca-app-pub-4583708687352330/3856163535',
  NATIVE_AD_ID: __DEV__ ? "ca-app-pub-3940256099942544/1044960115" : 'ca-app-pub-4583708687352330/6163580914',
  APP_OPEN_AD_ID: __DEV__
    ? GTest.APP_OPEN
    : Platform.OS == 'android'
      ? 'ca-app-pub-7948985703666296/9949256601'
      : 'ca-app-pub-4583708687352330/4850499243',
};
export default Config;
