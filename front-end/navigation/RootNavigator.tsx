import React from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoadingScreen } from '../general-screens/LoadingScreen';
import { LoginScreen } from '../general-screens/LoginScreen';
import { LoginLoginScreen } from '../general-screens/LoginLoginScreen';
import { RegistrationScreen } from '../general-screens/RegistrationScreen';

import { HelpScreen } from "../general-screens/HelpScreen";
import { SettingsScreen } from "../general-screens/SettingsScreen";
import { SecurityScreen } from "../general-screens/SecurityScreen";
import { MainMenuScreen } from "../general-screens/MainMenuScreen";
import { PreferencesScreen } from "../general-screens/PreferencesScreen";
import { AchivementsScreen } from "../general-screens/AchivementsScreen";
import { InformationScreen } from "../general-screens/InformationScreen";
import { AccountScreen } from "../general-screens/AccountScreen";
import { FoodScreen } from "../general-screens/FoodScreen";
import { ForumScreen } from "../general-screens/ForumScreen";

const Stack = createNativeStackNavigator();

export const RootNavigator = function RootNavigator() : JSX.Element {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={LoadingScreen} options={{ title: 'Welcome' }}/>
            <Stack.Screen name="LoginLoginScreen" component={LoginLoginScreen} options={{ title: 'LoginLogin' }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ title: 'Register' }} />
            <Stack.Screen name="PreferencesScreen" component={PreferencesScreen} options={{ title: 'Preferences' }} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings' }} />
            <Stack.Screen name="SecurityScreen" component={SecurityScreen} options={{ title: 'Security' }} />
            <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ title: 'Help' }} />
            <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} options={{ title: 'MainMenu' }} />
            <Stack.Screen name="AchivementsScreen" component={AchivementsScreen} options={{ title: 'Achivements' }} />
            <Stack.Screen name="InformationScreen" component={InformationScreen} options={{ title: 'Information' }} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ title: 'Account' }} />
            <Stack.Screen name="FoodScreen" component={FoodScreen} options={{ title: 'Food' }} />
            <Stack.Screen name="ForumScreen" component={ForumScreen} options={{ title: 'Forum' }} />
        </Stack.Navigator>
    );
}
