import React, { View } from "react-native";
import {Text, NativeBaseProvider, VStack, Center, HStack, Image} from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import {g_styles, settings_styles, time_styles} from "./GeneralStyle";

import { ImageButton } from "../components/ImageButton";

export const SettingsScreen = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}>
                    <Center>
                        <HStack>
                            <View onTouchStart={() => navigation.navigate('MainMenuScreen')}>
                                <Image style={settings_styles.arrowback} source={require("../image/ArrowBack.png")} alt={'arrowback'}/>
                            </View>
                            <Text style={settings_styles.heading}> Settings </Text>
                        </HStack>
                        <VStack space={5} style={settings_styles.settings_list}>
                            <ImageButton text="Account" onClick={() => {navigation.navigate('AccountScreen')}}/>
                            <ImageButton text="Preferences" onClick={() => {navigation.navigate('PreferencesScreen')}}/>
                            <ImageButton text="Password & Security" onClick={() => {navigation.navigate('SecurityScreen')}}/>
                            <ImageButton text="Help & FAQ" onClick={() => {navigation.navigate('HelpScreen')}}/>
                            <ImageButton text="Information" onClick={() => {navigation.navigate('InformationScreen')}}/>
                            <View style={settings_styles.logout}>
                                <ImageButton text="Log out" onClick={() => {navigation.navigate('LoginScreen')}}/>
                            </View>
                        </VStack>
                    </Center>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}