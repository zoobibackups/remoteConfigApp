/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import remoteConfig from '@react-native-firebase/remote-config';
 remoteConfig().setConfigSettings({
    minimumFetchIntervalMillis: 3000,
  });
AppRegistry.registerComponent(appName, () => App);
