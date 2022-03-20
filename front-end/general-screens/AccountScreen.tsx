import React, { View } from "react-native";
import { Text, NativeBaseProvider, Image, VStack, Button, Center } from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles, settings_styles, account_screen, preferences_screen, login_screen } from "./GeneralStyle";

export const AccountScreen = function ({ navigation }: any): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}>
                    <Center>
                        <Text style={settings_styles.title}>Account</Text>
                        <Image style={account_screen.big_image} source={require('../image/profile01.png')} alt="profile"></Image>
                        <Text style={account_screen.centred_text}> Slava Viak </Text>
                        <Image style={account_screen.small_image} source={require('../image/profile02.png')} alt="profile"></Image>
                        <Text style={account_screen.small_centred_text}> Alpaca Puciu  </Text>
                        <VStack style={settings_styles.settings_list} space={5}>
                            <View style={preferences_screen.option}>
                                <Text style={preferences_screen.label}>E-mail</Text>
                                <Text style={preferences_screen.selection}>dskld@gmail.com</Text>
                            </View>
                            <View style={preferences_screen.option}>
                                <Text style={preferences_screen.label}>Gender</Text>
                                <Text style={preferences_screen.selection}>Women</Text>
                            </View>
                            <View style={preferences_screen.option}>
                                <Text style={preferences_screen.label}>Birth date</Text>
                                <Text style={preferences_screen.selection}>24-04-1999</Text>
                            </View>
                        </VStack>
                        <Button style={account_screen.button} colorScheme="fuchsia" onPress={() => navigation.navigate('SettingsScreen')}><Text style={login_screen.text}>Back to settings</Text></Button>
                    </Center>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}
