import React from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { g_styles } from "./front-end/general-screens/GeneralStyle";
import {RootNavigator} from "./front-end/navigation/RootNavigator";

export default function App() : JSX.Element {
    return (
      <SafeAreaProvider style={g_styles.container_app}>
          <NavigationContainer>
            <RootNavigator/>
          </NavigationContainer>
      </SafeAreaProvider>
    );
}
