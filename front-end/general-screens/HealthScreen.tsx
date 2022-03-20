import React, {View, ScrollView, Image} from "react-native";
import { Text, NativeBaseProvider, HStack, Center, Input, Box } from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles, settings_styles, health_styles, main_menu } from "./GeneralStyle";

export const HealthScreen = function ({ navigation }: any): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}>
                    <Center>
                        <HStack>
                            <View onTouchStart={() => navigation.navigate('MainMenuScreen')}>
                                <Image style={health_styles .arrowback} source={require("../image/ArrowBack.png")} alt={"arrowback"}/>
                            </View>

                            <Text style={settings_styles.heading}>Health Care</Text>
                        </HStack>

                    </Center>
                    <Text style={health_styles.hello}>Hello.</Text>
                    <Text style={health_styles.gentle_ask}>How can we help you today?</Text>
                    <Input placeholder="Search" variant="filled" borderRadius="10" py="2" px="2" borderWidth="0" margin="10px"/>
                    <ScrollView horizontal={true}>
                        <Box style={health_styles.info}>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Psychologist</Text>
                        </Box>
                        <Box style={health_styles.info}>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Psychiatrist</Text>
                        </Box>
                        <Box style={health_styles.info}>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Oncologist</Text>
                        </Box>
                        <Box style={health_styles.info}>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Neurologist</Text>
                        </Box>
                        <Box style={health_styles.info}>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Gynecologist</Text>
                        </Box>
                    </ScrollView>
                    <Center>
                        <View style={health_styles.box}>
                            <HStack style={main_menu.flexContainer}>
                                <Text style={main_menu.categories}>Upcoming visits</Text>
                                <Text style={main_menu.seeAll}>See all</Text>
                            </HStack>
                            <Box style={main_menu.basicBox}>
                                <Center>
                                    <HStack marginBottom={2} style={main_menu.flexContainerInside}>
                                        <Text style={main_menu.basicText} fontSize={16} fontWeight={"bold"}>Today, 19 March!</Text>
                                        <Text style={main_menu.readMore}>Read more</Text>
                                    </HStack>
                                </Center>
                                <Text style={main_menu.basicText} fontSize={12}>Reminder of upcoming visit!</Text>
                                <Text style={main_menu.basicText} fontWeight={'bold'} fontSize={12}>Doctor: psychologist</Text>
                            </Box>
                        </View>

                    </Center>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}