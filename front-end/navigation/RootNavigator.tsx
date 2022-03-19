import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoadingScreen } from '../general-screens/LoadingScreen';
import { LoginScreen } from '../general-screens/LoginScreen';
import { HelpFAQ } from '../general-screens/HelpFAQ';

const Stack = createNativeStackNavigator();

export const RootNavigator = function RootNavigator() : JSX.Element {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={LoadingScreen} options={{ title: 'Welcome' }}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
            <Stack.Screen name="HelpFAQ" component={HelpFAQ} options={{ title: 'HelpFAQ' }} />
        </Stack.Navigator>
    );
}
