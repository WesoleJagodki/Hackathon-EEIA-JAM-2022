import React, { Image, Text, View, Alert, ScrollView } from "react-native";
import { login_screen } from "./GeneralStyle";
import { Help_FAQ } from "./GeneralStyle";
import {Input, NativeBaseProvider, Button, Box} from "native-base";
import { Center, Square, Circle } from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles } from "./GeneralStyle";
import city from "../image/city.png";
import sub from "../image/FANCITY.png";

export const HelpFAQ = function (): JSX.Element {
    return (
        <NativeBaseProvider>
            <ScrollView style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}>
                    <Text style={Help_FAQ.mainText}>Help & FAQ</Text>
                    <Center><Box style={Help_FAQ.boxText}><Text style={Help_FAQ.header}>What is Fencity?</Text><Text>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box></Center>
                    <Center><Box style={Help_FAQ.boxText}><Text style={Help_FAQ.header}>What is Fencity?</Text><Text>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box></Center>
                    <Center><Box style={Help_FAQ.boxText}><Text style={Help_FAQ.header}>What is Fencity?</Text><Text>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box></Center>
                    <Center><Box style={Help_FAQ.boxText}><Text style={Help_FAQ.header}>What is Fencity?</Text><Text>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box></Center>
                    <Center><Box style={Help_FAQ.boxText}><Text style={Help_FAQ.header}>What is Fencity?</Text><Text>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box></Center>
                </LinearGradient>

            </ScrollView>

        </NativeBaseProvider>
    )
}