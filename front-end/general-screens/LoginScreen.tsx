import React, { Image, Text, View, Alert } from "react-native";
import { login_screen } from "./GeneralStyle";

import city from "../image/city.png";
import sub from "../image/FANCITY.png";

import { Input, NativeBaseProvider, Button } from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles } from "./GeneralStyle";

export const LoginScreen = function (): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}
                />
                <Image
                    style={login_screen.logo1}
                    source={city}
                />
                <Image
                    style={login_screen.logo2}
                    source={sub}
                />
                <Text style={login_screen.h2}>closed, luxurious city in your pocket</Text>

                <View style={login_screen.buttons}>
                    <Button style={login_screen.button1} colorScheme="fuchsia" onPress={() => console.log("hello world")}>Sign in</Button>
                    <Button style={login_screen.button2} colorScheme="fuchsia" onPress={() => console.log("hello world")}>Log in</Button>
                </View>
            </View>

        </NativeBaseProvider>
    )
}