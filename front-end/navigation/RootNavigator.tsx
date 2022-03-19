import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoadingScreen } from '../general-screens/LoadingScreen';
import { LoginScreen } from '../general-screens/LoginScreen';
import {MainScreen} from "../general-screens/MainScreen";
import {PreferencesScreen} from "../general-screens/PreferencesScreen";

const Stack = createNativeStackNavigator();

export const RootNavigator = function RootNavigator() : JSX.Element {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={LoadingScreen} options={{ title: 'Welcome' }}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Main' }} />
            <Stack.Screen name="PreferencesScreen" component={PreferencesScreen} options={{ title: 'Preferences' }} />
        </Stack.Navigator>
    );
}
