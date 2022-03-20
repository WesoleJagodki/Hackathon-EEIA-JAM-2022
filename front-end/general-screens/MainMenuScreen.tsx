import React, {View, Image, ScrollView} from "react-native";
import {Text, NativeBaseProvider, HStack, Center, Box, Button, Divider } from "native-base";

import {LinearGradient} from 'expo-linear-gradient';
import {g_styles, main_menu} from "./GeneralStyle";


export const MainMenuScreen = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
            <ScrollView style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}>
                    <HStack style={main_menu.topContainer}>
                        <View onTouchStart={() => navigation.navigate('SettingsScreen')}>
                            <Image style={main_menu.gear} source={require("../image/cog.png")}/>
                        </View>
                        <View onTouchStart={() => navigation.navigate('AchivementsScreen')}>
                            <Image style={main_menu.gear} source={require("../image/badge.png")}/>
                        </View>
                    </HStack>
                    <View style={main_menu.midContainer}>
                        <Text style={main_menu.hello}>Hello!</Text>
                        <Text style={main_menu.smallHello}>We are very happy for you to be with us, have a nice day!</Text>
                        <Box style={main_menu.basicBox}>
                            <Text style={main_menu.basicText} textAlign={'center'} fontSize={12.5}>Today, 19 March</Text>
                            <Text style={main_menu.basicText} textAlign={'center'} fontSize={17} fontWeight={'bold'}>Cloudy</Text>
                        </Box>
                        <Center>
                            <HStack style={main_menu.flexContainer}>
                              <Text style={main_menu.categories}>Forum</Text>
                              <Text style={main_menu.seeAll}>See all</Text>
                            </HStack>
                        </Center>
                        <Box style={main_menu.basicBox}>
                            <Center>
                                <HStack marginBottom={2} style={main_menu.flexContainerInside}>
                                  <Text style={main_menu.basicText} fontSize={16}>Special April Event</Text>
                                  <Text style={main_menu.readMore}>Read more</Text>
                                </HStack>
                            </Center>
                            <Text style={main_menu.basicText} fontSize={8}>Wyjątkowa okazja wzięcia udziału w niezapomnianej imprezie w elitarnym towarzystwie. Nie może cię tam zabraknąć
                                A unique opportunity to take part in an unforgettable party in an elite company. You cannot miss it!</Text>
                        </Box>
                        <Center>
                            <HStack style={main_menu.flexContainer}>
                                <Text style={main_menu.categories}>Order food</Text>
                                <Text style={main_menu.seeAll}>See all</Text>
                            </HStack>
                        </Center>
                        <ScrollView horizontal={true}>
                            <Box style={main_menu.SmallBox}>
                                <Image style={main_menu.food} source={require("../image/strawberryicecream.png")}/>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Strawberry Cream</Text>
                            </Box>
                            <Box style={main_menu.SmallBox}>
                                <Image style={main_menu.food} source={require("../image/matcha.png")}/>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Matcha Ice</Text>
                            </Box>
                            <Box style={main_menu.SmallBox}>
                                <Image style={main_menu.food} source={require("../image/milkyicecream.png")}/>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Milky Day</Text>
                            </Box>
                            <Box style={main_menu.SmallBox}>
                                <Image style={main_menu.food} source={require("../image/watermelon.png")}/>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Tropical</Text>
                            </Box>
                            <Box style={main_menu.SmallBox}>
                                <Image style={main_menu.food} source={require("../image/watermelon.png")}/>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Watermelon</Text>
                            </Box>
                        </ScrollView>
                        <Center>
                            <HStack style={main_menu.flexContainer}>
                                <Text style={main_menu.categories}>Smart Home</Text>
                                <Text style={main_menu.seeAll}>See all</Text>
                            </HStack>
                        </Center>
                        <ScrollView horizontal={true}>
                            <Box style={main_menu.SmallBox}>
                                <Image style={main_menu.food} source={require("../image/light.png")}/>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Manage Light</Text>
                            </Box>
                            <Box style={main_menu.SmallBox}>
                                <Image style={main_menu.food} source={require("../image/cat2.png")}/>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Feed Cat</Text>
                            </Box>
                            <Box style={main_menu.SmallBox}>
                                <Image style={main_menu.food} source={require("../image/catdrin.png")}/>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Cat Drink</Text>
                            </Box>
                            <Box style={main_menu.SmallBox}>
                                <Image style={main_menu.food} source={require("../image/thermo.png")}/>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Temperature</Text>
                            </Box>
                            <Box style={main_menu.SmallBox}>
                                <Image style={main_menu.food} source={require("../image/camera.png")}/>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Camera</Text>
                            </Box>
                        </ScrollView>
                        <Center>
                            <HStack style={main_menu.flexContainer}>
                                <Text style={main_menu.categories}>Health care</Text>
                                <Text style={main_menu.seeAll}>See all</Text>
                            </HStack>
                        </Center>
                            <Box style={main_menu.basicBox}>
                                <Center>
                                    <HStack marginBottom={2} style={main_menu.flexContainerInside}>
                                        <Text style={main_menu.basicText} fontSize={16}>Today, 19 March!</Text>
                                        <Text style={main_menu.readMore}>Read more</Text>
                                    </HStack>
                                </Center>
                                <Text style={main_menu.basicText} fontSize={8}>Reminder of upcoming visit!</Text>
                                <Text style={main_menu.basicText} fontWeight={'bold'} fontSize={8}>Doctor: psychologist</Text>
                            </Box>
                        <ScrollView horizontal={true}>
                            <Box style={main_menu.SmallBoxSmall}>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Psychologist</Text>
                            </Box>
                            <Box style={main_menu.SmallBoxSmall}>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Psychiatrist</Text>
                            </Box>
                            <Box style={main_menu.SmallBoxSmall}>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Oncologist</Text>
                            </Box>
                            <Box style={main_menu.SmallBoxSmall}>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Neurologist</Text>
                            </Box>
                            <Box style={main_menu.SmallBoxSmall}>
                                <Text textAlign={'center'} fontSize={13} style={main_menu.basicText}>Gynecologist</Text>
                            </Box>
                        </ScrollView>
                        <Center>
                            <HStack style={main_menu.flexContainer}>
                                <Text style={main_menu.categories}>Plan your free time</Text>
                                <Text style={main_menu.seeAll}>See all</Text>
                            </HStack>
                        </Center>
                        <Box style={main_menu.basicBox}>
                            <Box style={main_menu.basicBoxWhite}>
                                <HStack style={main_menu.flexContainerInsideDollar}>
                                    <Text fontSize={14} marginTop={2}>6 Mar, 2022</Text>
                                    <Text color={'#c45e32'} fontSize={24} fontWeight={'extrabold'}>$24</Text>
                                </HStack>
                            </Box>
                            <Text style={main_menu.basicTextBlack} margin={5} fontSize={16} fontWeight={'extrabold'}>Internet City - Business Tower</Text>
                            <Divider/>
                            <Text style={main_menu.basicTextBlack} margin={5} fontSize={16} fontWeight={'extrabold'}>Mall of the Emirates Metro</Text>
                            <Center><Button width={100} marginBottom={5}>Find someone</Button></Center>
                        </Box>
                    </View>
                </LinearGradient>
            </ScrollView>
        </NativeBaseProvider>
    )
}