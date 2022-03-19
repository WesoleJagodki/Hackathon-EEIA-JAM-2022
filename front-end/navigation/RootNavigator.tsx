import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoadingScreen } from '../general-screens/LoadingScreen';
import { LoginScreen } from '../general-screens/LoginScreen';
import { RegistrationScreen } from '../general-screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = function RootNavigator() : JSX.Element {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={LoadingScreen} options={{ title: 'Welcome' }}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ title: 'Registration' }} />
        </Stack.Navigator>
    );
}
