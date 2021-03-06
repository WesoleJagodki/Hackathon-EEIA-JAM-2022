import React, {View, Image, ScrollView} from "react-native";
import {Text, NativeBaseProvider, HStack, Divider} from "native-base";


import {LinearGradient} from "expo-linear-gradient";
import {g_styles, main_menu, Forum_styles, settings_styles} from "./GeneralStyle";


export const ForumScreen = function ({navigation}: any): JSX.Element {
    return (
        <NativeBaseProvider>
            <ScrollView style={g_styles.container_app}>
                <LinearGradient
                    colors={["rgba(22,6,81,100)", "transparent"]}>
                    <View style={main_menu.topContainer2}>
                        <HStack style={Forum_styles.header}>
                            <View onTouchStart={() => navigation.navigate("MainMenuScreen")}>
                                <Image style={main_menu.arrowback} source={require("../image/ArrowBack.png")} alt={"arrowback"}/>

                            </View>
                            <Text style={settings_styles.title}>Forum</Text>
                            <Image style={Forum_styles.logo} source={require("../image/loginpicture.png")} alt={"slava-viak"}/>
                        </HStack>
                        <HStack style={Forum_styles.container}>
                            <View><Image style={Forum_styles.photo} source={require("../image/16photo1.png")} alt={"forum"}/></View>
                            <View>
                                <Text fontSize={22} style={Forum_styles.text}>Birthday Party</Text>
                                <Text fontSize={12} style={Forum_styles.text}>I would like to invite you to my birthday party</Text>
                                <HStack marginBottom={3}>
                                    <Text marginTop={2} fontSize={12} style={Forum_styles.text} fontWeight={"bold"}>Janinka Michalinka</Text>
                                    <Text marginTop={2} fontSize={12} marginLeft={5} textAlign={"right"} color={"#9A16A3"} fontWeight={"bold"}>16 March 2022</Text>
                                </HStack>
                                <Divider/>
                            </View>
                        </HStack>
                        <HStack style={Forum_styles.container}>
                            <View><Image style={Forum_styles.photo} source={require("../image/image17.png")} alt={"forum"}/></View>
                            <View>
                                <Text fontSize={22} style={Forum_styles.text}>Looking for a dog</Text>
                                <Text fontSize={12} style={Forum_styles.text}>I like chihuachua</Text>
                                <HStack marginBottom={3}>
                                    <Text marginTop={2} fontSize={12} style={Forum_styles.text} fontWeight={"bold"}>Juan Pablo the secundo</Text>
                                    <Text marginTop={2} fontSize={12} marginLeft={5} textAlign={"right"} color={"#9A16A3"} fontWeight={"bold"}>16 March 2022</Text>
                                </HStack>
                                <Divider/>
                            </View>
                        </HStack>
                        <HStack style={Forum_styles.container}>
                            <View><Image style={Forum_styles.photo} source={require("../image/image18.png")} alt={"forum"}/></View>
                            <View>
                                <Text fontSize={22} style={Forum_styles.text}>What&apos;s up?</Text>
                                <Text fontSize={12} style={Forum_styles.text}>#pushinp</Text>
                                <HStack marginBottom={3}>
                                    <Text marginTop={2} fontSize={12} style={Forum_styles.text} fontWeight={"bold"}>Olina Wygrywalina</Text>
                                    <Text marginTop={2} fontSize={12} marginLeft={5} textAlign={"right"} color={"#9A16A3"} fontWeight={"bold"}>16 March 2022</Text>
                                </HStack>
                                <Divider/>
                            </View>
                        </HStack>
                        <HStack style={Forum_styles.container}>
                            <View><Image style={Forum_styles.photo} source={require("../image/image19.png")} alt={"forum"}/></View>
                            <View>
                                <Text fontSize={22} style={Forum_styles.text}>Crypto: any tips?</Text>
                                <Text fontSize={12} style={Forum_styles.text}>Average crypto fan</Text>
                                <HStack marginBottom={3}>
                                    <Text marginTop={2} fontSize={12} style={Forum_styles.text} fontWeight={"bold"}>Sleeping Dog Snoop Dogg</Text>
                                    <Text marginTop={2} fontSize={12} marginLeft={5} textAlign={"right"} color={"#9A16A3"} fontWeight={"bold"}>16 March 2022</Text>
                                </HStack>
                                <Divider/>
                            </View>
                        </HStack>
                        <HStack style={Forum_styles.container}>
                            <View><Image style={Forum_styles.photo} source={require("../image/image20.png")} alt={"forum"}/></View>
                            <View>
                                <Text fontSize={22} style={Forum_styles.text}>Kitty NFT&apos;s</Text>
                                <Text fontSize={12} style={Forum_styles.text}>Join our class!</Text>
                                <HStack marginBottom={3}>
                                    <Text marginTop={2} fontSize={12} style={Forum_styles.text} fontWeight={"bold"}>Belina Halina Malina</Text>
                                    <Text marginTop={2} fontSize={12} marginLeft={5} textAlign={"right"} color={"#9A16A3"} fontWeight={"bold"}>15 March 2022</Text>
                                </HStack>
                                <Divider/>
                            </View>
                        </HStack>
                        <HStack style={Forum_styles.container}>
                            <View><Image style={Forum_styles.photo} source={require("../image/image21.png")} alt={"forum"}/></View>
                            <View>
                                <Text fontSize={22} style={Forum_styles.text}>Papaja</Text>
                                <Text fontSize={12} style={Forum_styles.text}>Essasito</Text>
                                <HStack marginBottom={3}>
                                    <Text marginTop={2} fontSize={12} style={Forum_styles.text} fontWeight={"bold"}>Wypilem skrzynke RedBulla</Text>
                                    <Text marginTop={2} fontSize={12} marginLeft={5} textAlign={"right"} color={"#9A16A3"} fontWeight={"bold"}>14 March 2022</Text>
                                </HStack>
                                <Divider/>
                            </View>
                        </HStack>
                    </View>
                </LinearGradient>
            </ScrollView>
        </NativeBaseProvider>
    );
};
