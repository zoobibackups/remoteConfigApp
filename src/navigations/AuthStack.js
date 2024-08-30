import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LanguageScreen from '../screens/LanguageScreen';
import IntroductionScreen from '../screens/IntroductionScreen';
import LanguageSecondaryScreen from '../screens/LanguageSecondaryScreen';
import PermissionScreen from '../screens/PermissionScreen';
const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible:false,
                headerStyle: {
                    backgroundColor: '#0090FF',
                },
                headerTitleStyle: {
                    fontWeight: '800',
                    fontSize: 14,
                    color: '#ffffff',
                },
                headerTintColor: '#ffffff',
            }}>
            <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
            <Stack.Screen
                name="IntroductionScreen"
                component={IntroductionScreen}
            />
            <Stack.Screen
                name="LanguageSecondaryScreen"
                component={LanguageSecondaryScreen}
                options={{ title: 'Select Language' }}
            />
            <Stack.Screen
                name="PermissionScreen"
                component={PermissionScreen}
            />
        </Stack.Navigator>
    );
}

export default AuthStack;
