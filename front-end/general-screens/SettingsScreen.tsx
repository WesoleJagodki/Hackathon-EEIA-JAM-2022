import React, { View } from "react-native";
import { Text, NativeBaseProvider, VStack } from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles, settings_styles } from "./GeneralStyle";

import { ImageButton } from "../components/ImageButton";

export const SettingsScreen = function (): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}>
                    <Text style={settings_styles.heading}> Settings </Text>
                    <VStack space={5} style={settings_styles.settings_list}>
                        <ImageButton text="Account" />
                        <ImageButton text="Preferences" />
                        <ImageButton text="Password & Security" />
                        <ImageButton text="Help & FAQ" />
                        <ImageButton text="Info" />
                    </VStack>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}