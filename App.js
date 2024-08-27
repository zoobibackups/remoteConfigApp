import remoteConfig from '@react-native-firebase/remote-config';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AuthStack from './src/navigations/AuthStack';
import {persistor, store} from './src/store/index';
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
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GestureHandlerRootView style={{flex: 1}}>
                    <NavigationContainer>
                        <NativeBaseProvider>
                            <AuthStack />
                        </NativeBaseProvider>
                    </NavigationContainer>
                </GestureHandlerRootView>
            </PersistGate>
        </Provider>
    );
}
