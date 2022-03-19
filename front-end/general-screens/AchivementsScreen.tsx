import React, { View } from "react-native";
import { Text, NativeBaseProvider, Image, VStack, HStack, Modal, Button } from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles, settings_styles, achivements_styles } from "./GeneralStyle";
import { useState } from "react";

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

export const AchivementsScreen = function (): JSX.Element {
    const [showModal, setShowModal] = useState(false);
    const [popupData, setPopupData] = useState({ title: null, description: null});
    const [index, setIndex] = useState(0);

    function MiniAlpaca(alpaca: any): JSX.Element {
        const data = { title: alpaca.title, description: alpaca.description};

        function onAlpacaClick() {
            if(data.title && data.description) {
                setPopupData(data);
                setShowModal(true);
            }
        }

        setIndex(index + 1);

        return (
            <View key={index} onTouchEnd={onAlpacaClick}>
                <Image
                    style={achivements_styles.alpaca_mini}
                    source={alpaca.img}
                    alt={"Alpaca" + index.toString()}
                    key={index}
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
                        <Text style={achivements_styles.footer}> Congratulations! </Text>
                    </VStack>
                    <Modal isOpen={showModal}>
                        <Modal.Content maxWidth="400px">
                            <Modal.CloseButton />
                            <Modal.Header>{popupData.title}</Modal.Header>
                            <Modal.Body>
                                {popupData.description}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button.Group space={2}>
                                    <Button onPress={() => { setShowModal(false); }}>
                                        Complited
                                    </Button>
                                </Button.Group>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}