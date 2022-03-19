import React, { View } from "react-native";
import { NativeBaseProvider, useDisclose, Button, VStack, Actionsheet, Text, HStack } from "native-base";
import { settings_styles } from "./GeneralStyle";

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
                    <Text style={settings_styles.title}>Preferences</Text>
                    <VStack style={settings_styles.settings_list} space={5}>
                        <HStack space={160}>
                            <Text style={settings_styles.preference_label}>Gender</Text>
                            <Text style={settings_styles.preference_selection} onPress={onOpen}>{gender}</Text>
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
                        <HStack space={180}>
                            <Text style={settings_styles.preference_label}>Age</Text>
                            <Text style={settings_styles.preference_selection}> 18-31 </Text>
                        </HStack>
                    </VStack>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}