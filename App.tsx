import React from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from "./front-end/navigation/RootNavigator";

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
