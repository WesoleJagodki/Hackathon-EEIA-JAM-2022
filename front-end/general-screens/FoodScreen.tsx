import React, { Image, ScrollView} from "react-native";
import {Text, NativeBaseProvider, HStack, Center, Box} from "native-base";

import {LinearGradient} from 'expo-linear-gradient';
import {g_styles, main_menu, settings_styles} from "./GeneralStyle";


export const FoodScreen = function (): JSX.Element {
    return (
        <NativeBaseProvider>
            <ScrollView style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}>
                    <Center>
                        <Text style={settings_styles.title}>Order food</Text>
                        <Text style={main_menu.basicText}>What do you want today?</Text>
                        <HStack style={main_menu.flexContainer}>
                            <Text style={main_menu.categories}>Ice Cream</Text>
                        </HStack>
                    </Center>
                    <ScrollView horizontal={true}>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/strawberryicecream.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Strawberry Cream</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/matcha.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Matcha Ice</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/milkyicecream.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Milky Day</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/tropical.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Tropical</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/watermelon.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Watermelon</Text>
                        </Box>
                    </ScrollView>
                    <Center>
                        <HStack style={main_menu.flexContainer}>
                            <Text style={main_menu.categories}>Fast food</Text>
                        </HStack>
                    </Center>
                    <ScrollView horizontal={true}>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/pizza.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Pizza</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/kfc.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>KFC</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/tacos.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Tacos</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/fries.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Fries</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/burger.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Burger</Text>
                        </Box>
                    </ScrollView>
                    <Center>
                        <HStack style={main_menu.flexContainer}>
                            <Text style={main_menu.categories}>Drink</Text>
                        </HStack>
                    </Center>
                    <ScrollView horizontal={true}>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/tea.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Tea</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/coffee.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Coffee</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/boba.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Boba</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/milk.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Tropical</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/shake.png")}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Shake</Text>
                        </Box>
                    </ScrollView>
                </LinearGradient>
            </ScrollView>
        </NativeBaseProvider>
    )
}