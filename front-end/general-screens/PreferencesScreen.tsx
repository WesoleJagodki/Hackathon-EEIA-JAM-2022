import React, {Text, View} from "react-native";
import { NativeBaseProvider, useDisclose, Button, Box, Actionsheet } from "native-base";
import {login_screen, preferences_screen} from "./GeneralStyle";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles } from "./GeneralStyle";

export const PreferencesScreen = function(): JSX.Element {
    const {isOpen, onOpen, onClose} = useDisclose();
    return(
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}>
                    <Text style={preferences_screen.title}>Preferences</Text>
                    <View style={preferences_screen.horizontal}>
                        <Text style={preferences_screen.text1}>Gender</Text>

                        <Button style={preferences_screen.button1} onPress={onOpen}>Actionsheet</Button>
                        <Actionsheet isOpen={isOpen} onClose={onClose}>
                            <Actionsheet.Content>
                                <Box w="100%" h={60} px={4} justifyContent="center">
                                    <Text fontSize="16" color="gray.500" _dark={{
                                        color: "gray.300"
                                    }}>
                                        Albums
                                    </Text>
                                </Box>
                                <Actionsheet.Item>Delete</Actionsheet.Item>
                                <Actionsheet.Item>Share</Actionsheet.Item>
                                <Actionsheet.Item>Play</Actionsheet.Item>
                                <Actionsheet.Item>Favourite</Actionsheet.Item>
                                <Actionsheet.Item>Cancel</Actionsheet.Item>
                            </Actionsheet.Content>
                        </Actionsheet>
                    </View>
                    <View style={preferences_screen.horizontal}>
                        <Text style={preferences_screen.text2}>Age</Text>
                    </View>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}