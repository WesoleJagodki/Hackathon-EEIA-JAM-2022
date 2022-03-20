import React, { View } from "react-native";
import { useState } from "react";
import { Text, NativeBaseProvider, Image, VStack, HStack, Button, Center } from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import {g_styles, settings_styles, achivements_styles, login_screen} from "./GeneralStyle";
import {AlpakaModal} from "../modal/AlpakaModal";

const ALPACAS = [
    {
        img: require("../image/calm_alpaca.png"),
        title: "Calm alpaca",
        description: "Schedule a yoga class 3 times"
    },
    {
        img: require("../image/suprised_alpaca.png"),
        title: "Suprise alpaca",
        description: "Log in 365 days in a row"
    },
    { img: require("../image/a3.png") },
    { img: require("../image/a4.png") },
    { img: require("../image/a5.png") }
];

export const AchivementsScreen = function ({navigation} : any): JSX.Element {
    const [showModal, setShowModal] = useState(false);
    const [popupData, setPopupData] = useState({ title: null, description: null, img: null});

    function MiniAlpaca(alpaca: any): JSX.Element {
        const data = { title: alpaca.title, description: alpaca.description, img: alpaca.img};

        function onAlpacaClick() {
            if(data.title && data.description) {
                setPopupData(data);
                setShowModal(true);
            }
        }

        return (
            <View key={Math.random()} onTouchEnd={onAlpacaClick}>
                <Image
                    style={achivements_styles.alpaca_mini}
                    source={require(`../image/a4.png`)}
                    alt={alpaca.name}
                    key={alpaca.name}
                    source={alpaca.img}
                    alt="Alpaca"
                    key={Math.random()}
                />
            </View>
        )
    }

    return (
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}
                >
                    <Center>
                        <Text style={settings_styles.heading}>Achievements</Text>
                        <Image style={achivements_styles.alpaca_img} source={require("../image/alpaca.png")} alt="Alpaca"></Image>
                        <Text style={achivements_styles.centred_text}>Fulfilled alpaca dreams</Text>

                        <VStack style={achivements_styles.mini_alpacas} space={5}>
                            <HStack space={3}>
                                {
                                    ALPACAS.slice(0, 3).map(MiniAlpaca)
                                }
                            </HStack>
                            <HStack space={3}>
                                {
                                    ALPACAS.slice(3).map(MiniAlpaca)
                                }
                            </HStack>
                        </VStack>
                        <Button style={achivements_styles.button} colorScheme="fuchsia" onPress={() => navigation.navigate('MainMenuScreen')}><Text style={login_screen.text}>Congratulations!</Text></Button>
                        <AlpakaModal popupData={popupData} setShowModal={setShowModal} showModal={showModal}/>
                    </Center>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}
