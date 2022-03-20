import React, { View } from "react-native";
import { Text, NativeBaseProvider, VStack, Center, HStack, Button, Image, Checkbox, Box, Divider } from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles, time_styles, Help_FAQ, main_menu } from "./GeneralStyle";

export const PlanFreeTime = function ({ navigation }: any): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}>
                    <Center>
                        <Text style={time_styles.heading}> Plan your free time </Text>
                    </Center>
                    <Text style={time_styles.text}> Select a car </Text>
                    <Center>
                        <HStack space={5}>
                            <Button style={time_styles.auto_btn}> <Image style={time_styles.auto} source={require('../image/auto.png')} /> </Button>
                            <Button style={time_styles.auto_btn}> <Image style={time_styles.auto} source={require('../image/auto_2.png')} /> </Button>
                            <Button style={time_styles.auto_btn}> <Image style={time_styles.auto} source={require('../image/auto_3.png')} /> </Button>
                            <Button style={time_styles.auto_btn}> <Image style={time_styles.auto} source={require('../image/auto_4.png')} /> </Button>
                        </HStack>
                    </Center>

                    <Text style={time_styles.text}> Preferences </Text>
                    <VStack space={3} marginLeft="30px">
                        <HStack space={2}>
                            <Checkbox value="test" />
                            <Text style={{ color: 'white', fontSize: 16 }}>Alone</Text>
                        </HStack>
                        <HStack space={2}>
                            <Checkbox value="test" />
                            <Text style={{ color: 'white', fontSize: 16 }}>With someone</Text>
                        </HStack>
                    </VStack>
                    <Center>
                        <Button style={Help_FAQ.botton} colorScheme="fuchsia" onPress={() => navigation.navigate('SettingsScreen')}><Text style={time_styles.text}>Prepare a plan!</Text></Button>
                    </Center>

                    <Center>
                        <HStack style={main_menu.flexContainer}>
                            <Text style={main_menu.categories}>Rides history</Text>
                            <Text style={main_menu.seeAll}>See all</Text>
                        </HStack>
                        <Box style={main_menu.basicBox}>
                            <Box style={main_menu.basicBoxWhite}>
                                <HStack style={main_menu.flexContainerInsideDollar}>
                                    <Text fontSize={14} marginTop={2}>6 Mar, 2022</Text>
                                    <Text color={'#c45e32'} fontSize={24} fontWeight={'bold'}>$24</Text>
                                </HStack>
                            </Box>
                            <Text style={main_menu.basicTextBlack} margin={2} fontSize={16} fontWeight={'bold'}>Internet City - Business Tower</Text>
                            <Divider />
                            <Text style={main_menu.basicTextBlack} margin={2} fontSize={16} fontWeight={'bold'}>Mall of the Emirates Metro</Text>
                            <Center><Button style={main_menu.button} colorScheme="fuchsia"><Text style={main_menu.text}>Find someone</Text></Button></Center>
                        </Box>
                    </Center>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
    )
}