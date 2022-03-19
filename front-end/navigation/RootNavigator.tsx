import React from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoadingScreen } from '../general-screens/LoadingScreen';
import { LoginScreen } from '../general-screens/LoginScreen';
import { RegistrationScreen } from '../general-screens/RegistrationScreen';

import { HelpScreen } from "../general-screens/HelpScreen";
import { SettingsScreen } from "../general-screens/SettingsScreen";
import { SecurityScreen } from "../general-screens/SecurityScreen";
import { MainScreen } from "../general-screens/MainScreen";
import { PreferencesScreen } from "../general-screens/PreferencesScreen";
import {AchivementsScreen} from "../general-screens/AchivementsScreen";

const Stack = createNativeStackNavigator();

export const RootNavigator = function RootNavigator() : JSX.Element {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={LoadingScreen} options={{ title: 'Welcome' }}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ title: 'Register' }} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Main' }} />
            <Stack.Screen name="PreferencesScreen" component={PreferencesScreen} options={{ title: 'Preferences' }} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings' }} />
            <Stack.Screen name="SecurityScreen" component={SecurityScreen} options={{ title: 'Security' }} />
            <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ title: 'Help' }} />
            <Stack.Screen name="AchivementsScreen" component={AchivementsScreen} options={{ title: 'Achivements' }} />
        </Stack.Navigator>
    );
}
