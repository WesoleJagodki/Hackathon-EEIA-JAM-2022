import React from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { g_styles } from "./front-end/general-screens/GeneralStyle";
import {LoginScreen} from "./front-end/general-screens/LoginScreen";

export default function App() : JSX.Element {
    return (
      <SafeAreaProvider style={g_styles.container_app}>
          <LinearGradient
              colors={['rgba(22,6,81,100)', 'transparent']}
              style={g_styles.background}
          />
        <LoginScreen/>
      </SafeAreaProvider>
    );
}
