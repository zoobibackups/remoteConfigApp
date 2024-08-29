import remoteConfig from '@react-native-firebase/remote-config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AuthStack from './src/navigations/AuthStack';
import { persistor, store } from './src/store/index';
import { SafeAreaView } from 'react-native';
export default function App() {
    return (

        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GestureHandlerRootView style={{ flex: 1 }}>
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
