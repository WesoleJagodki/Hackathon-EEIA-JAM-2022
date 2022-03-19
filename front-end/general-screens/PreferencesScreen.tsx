import React, { View } from "react-native";
import { NativeBaseProvider, useDisclose, Button, VStack, Actionsheet, Text, HStack } from "native-base";
import { preferences_screen } from "./GeneralStyle";

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
                    <Text style={preferences_screen.title}>Preferences</Text>
                    <VStack>
                        <HStack>
                            <Text style={preferences_screen.preference_label}>Gender</Text>
                            <Button style={preferences_screen.gender_selection} onPress={onOpen}>{gender}</Button>
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
                        </HStack>
                        <HStack>
                            <Text style={preferences_screen.preference_label}>Age</Text>
                        </HStack>
                    </VStack>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}