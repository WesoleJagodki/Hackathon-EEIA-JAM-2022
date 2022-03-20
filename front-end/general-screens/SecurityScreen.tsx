import React, {Image, Text, View} from "react-native";
import {login_screen, Security_style} from "./GeneralStyle";
import {NativeBaseProvider, VStack, HStack, Center, Button} from "native-base";

import {LinearGradient} from 'expo-linear-gradient';
import {g_styles, security_screen} from "./GeneralStyle";
import {settings_styles} from './GeneralStyle';
import {DoubleImageButton} from "../components/DoubleImageButton";

export const SecurityScreen = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                >
                <Center>
                    <Text style={Security_style.mainText}>Password & Security</Text>
                    <VStack space={3} style={settings_styles.settings_list}>
                        <HStack position={'relative'} left={-5} onTouchStart={() => {navigation.navigate('')}}><Image style={security_screen.key} source={require("../image/key.png")}/><DoubleImageButton text="Change password"/></HStack>
                        <HStack position={'relative'} left={-7} onTouchStart={() => {navigation.navigate('')}}><Image style={security_screen.shield} source={require("../image/shield.png")}/><DoubleImageButton text="Two-factor authentication"/></HStack>
                        <HStack position={'relative'} left={-8} onTouchStart={() => {navigation.navigate('')}}><Image style={security_screen.questionmark} source={require("../image/help-circle.png")}/><DoubleImageButton text="Learn more about security"/></HStack>
                    </VStack>
                    <Button style={security_screen.menuButton} colorScheme="fuchsia" onPress={() => navigation.navigate('SettingsScreen')}><Text style={login_screen.text}>Back to settings</Text></Button>
                </Center>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}

