import React, {Image, Text, ScrollView} from "react-native";
import {information_screen, login_screen} from "./GeneralStyle";
import {NativeBaseProvider, Center, Button} from "native-base";

import {LinearGradient} from 'expo-linear-gradient';
import {g_styles, security_screen} from "./GeneralStyle";

export const InformationScreen = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
            <ScrollView style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                >
                    <Center>
                        <Text style={information_screen.header}>Information</Text>
                        <Text style={information_screen.text}>
                            Fancity application created by the Wesołe jagódki team as part of the EEIA JAM hackathon on 18-20.03.2022.
                        </Text>
                        <Text style={information_screen.text}>Team meambers:</Text>
                        <Text style={information_screen.list}> • Natalia Krzyżaniak</Text>
                        <Text style={information_screen.list}> • Mateusz Papuga</Text>
                        <Text style={information_screen.list}> • Adam Brząkała</Text>
                        <Text style={information_screen.list}> • Piotr Sarna</Text>
                        <Text style={information_screen.list}> • Olek Golus</Text>
                        <Text style={information_screen.text}>
                            In order to be able to deliver Wesołe Jagódki products, we need to process information about you. The types of information collected depend on how you use our Products.
                        </Text>
                        <Text style={information_screen.header2}>Partners</Text>
                        <Image style={information_screen.image3} source={require("../image/htd.png")} alt={"sponsor"}/>
                        <Image style={information_screen.image2} source={require("../image/red-bull-logo.png")} alt={"sponsor"}/>
                        <Image style={information_screen.image2} source={require("../image/WRS.png")} alt={"sponsor"}/>
                        <Image style={information_screen.image1} source={require("../image/dotnet.png")} alt={"sponsor"}/>
                        <Image style={information_screen.image1} source={require("../image/armors.png")} alt={"sponsor"}/>
                        <Button style={information_screen.button} colorScheme="fuchsia" onPress={() => navigation.navigate('SettingsScreen')}><Text style={login_screen.text}>Back to settings</Text></Button>
                    </Center>
                </LinearGradient>
            </ScrollView>
        </NativeBaseProvider>
    )
}

