import React, {Text,ScrollView,} from "react-native";
import {Help_FAQ, login_screen} from "./GeneralStyle";
import {NativeBaseProvider, Box, Center, Button} from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles } from "./GeneralStyle";

export const HelpScreen = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
            <ScrollView style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    >
                    <Center>
                        <Text style={Help_FAQ.mainText}>Help & FAQ</Text>
                        <Box style={Help_FAQ.boxText}><Text style={Help_FAQ.header}>What is Fancity?</Text><Text>Jeśli chcesz uszczęśliwić wszystkich nie bądź liderem - sprzedawaj lody..</Text></Box>
                        <Box style={Help_FAQ.boxText}><Text style={Help_FAQ.header}>What is Fancity?</Text><Text>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box>
                        <Box style={Help_FAQ.boxText}><Text style={Help_FAQ.header}>What is Fancity?</Text><Text>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box>
                        <Box style={Help_FAQ.boxText}><Text style={Help_FAQ.header}>What is Fancity?</Text><Text>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box>
                        <Box style={Help_FAQ.boxText}><Text style={Help_FAQ.header}>What is Fancity?</Text><Text>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text></Box>
                        <Button style={Help_FAQ.botton} colorScheme="fuchsia" onPress={() => navigation.navigate('SettingsScreen')}><Text style={login_screen.text}>Back to settings</Text></Button>
                    </Center>
                </LinearGradient>
            </ScrollView>
        </NativeBaseProvider>
    )
}