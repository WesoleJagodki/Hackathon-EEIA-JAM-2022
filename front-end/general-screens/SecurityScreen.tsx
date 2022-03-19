import React, {Image, Text, View} from "react-native";
import {Security_style} from "./GeneralStyle";
import {NativeBaseProvider, VStack, HStack, Center, Button} from "native-base";

import {LinearGradient} from 'expo-linear-gradient';
import {g_styles, security_screen} from "./GeneralStyle";
import {settings_styles} from './GeneralStyle';
import {ImageButton} from "../components/ImageButton";

export const SecurityScreen = function ({navigation}): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                >
                    <Text style={Security_style.mainText}>Password & Security</Text>
                    <VStack space={3} style={settings_styles.settings_list}>
                        <HStack position={'relative'} left={-5} onTouchStart={() => {navigation.navigate('HelpScreen')}}><Image style={security_screen.key} source={require("../image/key.png")}/><ImageButton text="Change password"/></HStack>
                        <HStack position={'relative'} left={-7} onTouchStart={() => {navigation.navigate('HelpScreen')}}><Image style={security_screen.shield} source={require("../image/shield.png")}/><ImageButton text="Two-factor authentication"/></HStack>
                        <HStack position={'relative'} left={-8} onTouchStart={() => {navigation.navigate('HelpScreen')}}><Image style={security_screen.questionmark} source={require("../image/help-circle.png")}/><ImageButton text="Learn more about security"/></HStack>
                    </VStack>
                    <Center><Button style={security_screen.menuButton} colorScheme="fuchsia" onPress={() => navigation.navigate('LoginScreen')}>Back to settings</Button></Center>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}

