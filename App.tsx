import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./front-end/navigation/RootNavigator";
import { NativeBaseProvider } from "native-base";

export default function App(): JSX.Element {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
