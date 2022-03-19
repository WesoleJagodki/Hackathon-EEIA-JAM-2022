import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoadingScreen } from '../general-screens/LoadingScreen';
import { LoginScreen } from '../general-screens/LoginScreen';
import { HelpScreen } from "../general-screens/HelpScreen";
import { SettingsScreen } from "../general-screens/SettingsScreen";
import { SecurityScreen } from "../general-screens/SecurityScreen";

const Stack = createNativeStackNavigator();

export const RootNavigator = function RootNavigator() : JSX.Element {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={LoadingScreen} options={{ title: 'Welcome' }}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
            <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ title: 'Help' }} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings' }} />
            <Stack.Screen name="SecurityScreen" component={SecurityScreen} options={{ title: 'Security' }} />
        </Stack.Navigator>
    );
}
