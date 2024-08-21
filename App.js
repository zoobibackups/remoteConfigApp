import remoteConfig from '@react-native-firebase/remote-config';
import {Box, NativeBaseProvider, Text} from 'native-base';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigations/AuthStack';

export default function App() {
  useEffect(() => {
    fetchDataFromRemoteConfig();
  }, []);

  const fetchDataFromRemoteConfig = async () => {
    remoteConfig()
      .fetchAndActivate()
      .then(async fetchedRemotely => {
        const config = remoteConfig().getAll();
        let values = JSON.parse(config.remoteConfig._value);
        //console.log(values);
      })
      .catch(err => {
        console.log(err, 'ERROR');
      });
  };
  return (
    <NavigationContainer>
      <NativeBaseProvider>
       <AuthStack  />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
