import React, {View, Image, ScrollView} from "react-native";
import {Text, NativeBaseProvider, HStack, Center, VStack} from "native-base";

import {LinearGradient} from "expo-linear-gradient";
import {g_styles, settings_styles, health_styles, main_menu} from "./GeneralStyle";

export const PsychiatristsScreen = function ({navigation}: any): JSX.Element {
    return (
        <NativeBaseProvider>
            <ScrollView style={g_styles.container_app}>
                <LinearGradient
                    colors={["rgba(22,6,81,100)", "transparent"]}>
                    <Center>
                        <HStack>
                            <View onTouchStart={() => navigation.navigate("MainMenuScreen")}>
                                <Image style={health_styles.arrowback} source={require("../image/ArrowBack.png")}  alt={"arrow"}/>
                            </View>
                            <Text style={settings_styles.heading}>Psychiatrist</Text>
                        </HStack>
                    </Center>
                    <HStack>
                        <Text margin={12} style={main_menu.basicText} fontWeight={"bold"}>Top doctors</Text>
                        <Text style={main_menu.seeAll1}>See all</Text>
                    </HStack>
                    <HStack style={health_styles.container}>
                        <View>
                            <Image style={health_styles.doctor} source={require("../image/image32.png")}  alt={"Psychiatrists"}/>
                        </View>
                        <VStack>
                            <Text fontSize={22} style={main_menu.basicText}>Dr. Melly Neil</Text>
                            <Text marginBottom={2} fontSize={14} color={"#9A16A3"}>Psychiatrist</Text>
                            <HStack>
                                <Image style={health_styles.star} source={require("../image/star.png")}  alt={"star"}/>
                                <Text style={main_menu.basicText}>4.8</Text>
                                <Text color={"#9A16A3"}>      (1021 reviews)</Text>
                            </HStack>
                        </VStack>
                    </HStack>
                    <HStack style={health_styles.container}>
                        <View>
                            <Image style={health_styles.doctor} source={require("../image/image33.png")}  alt={"Psychiatrists"}/>
                        </View>
                        <VStack>
                            <Text fontSize={22} style={main_menu.basicText}>Dr. Jimmy Carner</Text>
                            <Text marginBottom={2} fontSize={14} color={"#9A16A3"}>Psychiatrist</Text>
                            <HStack>
                                <Image style={health_styles.star} source={require("../image/star.png")}  alt={"star"}/>
                                <Text style={main_menu.basicText}>4.7</Text>
                                <Text color={"#9A16A3"}>      (729 reviews)</Text>
                            </HStack>
                        </VStack>
                    </HStack>
                    <HStack style={health_styles.container}>
                        <View>
                            <Image style={health_styles.doctor} source={require("../image/image34.png")}  alt={"Psychiatrists"}/>
                        </View>
                        <VStack>
                            <Text fontSize={22} style={main_menu.basicText}>Dr. Kim Holland</Text>
                            <Text marginBottom={2} fontSize={14} color={"#9A16A3"}>Psychiatrist</Text>
                            <HStack>
                                <Image style={health_styles.star} source={require("../image/star.png")}  alt={"star"}/>
                                <Text style={main_menu.basicText}>4.4</Text>
                                <Text color={"#9A16A3"}>      (690 reviews)</Text>
                            </HStack>
                        </VStack>
                    </HStack>
                    <HStack style={health_styles.container}>
                        <View>
                            <Image style={health_styles.doctor} source={require("../image/image35.png")}  alt={"Psychiatrists"}/>
                        </View>
                        <VStack>
                            <Text fontSize={22} style={main_menu.basicText}>Dr. Jordan Klaus</Text>
                            <Text marginBottom={2} fontSize={14} color={"#9A16A3"}>Psychiatrist</Text>
                            <HStack>
                                <Image style={health_styles.star} source={require("../image/star.png")}  alt={"star"}/>
                                <Text style={main_menu.basicText}>4.3</Text>
                                <Text color={"#9A16A3"}>      (483 reviews)</Text>
                            </HStack>
                        </VStack>
                    </HStack>
                </LinearGradient>
            </ScrollView>
        </NativeBaseProvider>
    );
};