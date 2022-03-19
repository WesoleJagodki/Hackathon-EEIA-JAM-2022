import React, { View } from "react-native";
import { NativeBaseProvider, useDisclose, Center, VStack, Actionsheet, Text} from "native-base";
import { settings_styles, preferences_screen } from "./GeneralStyle";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles } from "./GeneralStyle";
import { useState } from "react";


export const PreferencesScreen = function (): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclose();
    const [gender, setGender] = useState('Men');

    const genders = ['Men', 'Women', 'Both', 'Neutral', 'None'];

    return (
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}>
                    <Center>
                        <Text style={settings_styles.title}>Preferences</Text>
                        <VStack style={settings_styles.settings_list} space={5}>
                            <View style={preferences_screen.option}>
                                <Text style={preferences_screen.label}>Gender</Text>
                                <Text style={preferences_screen.selection} onPress={onOpen}>{gender}</Text>
                                <Actionsheet isOpen={isOpen} onClose={onClose}>
                                    <Actionsheet.Content>
                                        {
                                            genders.map((gender, key) => {
                                                return (
                                                    <Actionsheet.Item key={key} onPress={() => setGender(gender)}>
                                                        {gender}
                                                    </Actionsheet.Item>
                                                )
                                            })
                                        }
                                    </Actionsheet.Content>
                                </Actionsheet>
                            </View>
                            <View style={preferences_screen.option}>
                                <Text style={preferences_screen.label}>Age</Text>
                                <Text style={preferences_screen.selection}> 18-31</Text>
                            </View>
                        </VStack>
                    </Center>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}