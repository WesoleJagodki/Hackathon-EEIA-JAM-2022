import React, { Image, ScrollView, View} from "react-native";
import {Text, NativeBaseProvider, HStack, Center, Box} from "native-base";

import {LinearGradient} from 'expo-linear-gradient';
import {g_styles, main_menu, settings_styles} from "./GeneralStyle";

export const FoodScreen = function ({navigation} : any): JSX.Element {
    return (
        <NativeBaseProvider>
            <ScrollView style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}>
                    <Center>
                        <HStack>
                            <View onTouchStart={() => navigation.navigate('MainMenuScreen')}>
                                <Image style={main_menu.arrowback} source={require("../image/ArrowBack.png")} alt={"arrowback"}/>
                            </View>

                            <Text style={settings_styles.title}>Order food</Text>
                            <Image style={main_menu.shop} source={require("../image/shopping-cart.png")} alt={"shop"}/>
                        </HStack>
                        <Text style={main_menu.basicText}>What do you want today?</Text>
                        <HStack style={main_menu.flexContainer}>
                            <Text style={main_menu.categories}>Ice Cream</Text>
                        </HStack>
                    </Center>
                    <ScrollView horizontal={true}>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/strawberryicecream.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Strawberry Cream</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>3$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/matcha.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Matcha Ice</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>4$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/milkyicecream.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Milky Day</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>3.50$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/tropical.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Tropical</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>5$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/watermelon.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Watermelon</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>4$</Text>
                        </Box>
                    </ScrollView>
                    <Center>
                        <HStack style={main_menu.flexContainer}>
                            <Text style={main_menu.categories}>Fast food</Text>
                        </HStack>
                    </Center>
                    <ScrollView horizontal={true}>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/pizza.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Pizza</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>11$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/kfc.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>KFC</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>12$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/tacos.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Tacos</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>8$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/fries.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Fries</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>5$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/burger.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Burger</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>14$</Text>
                        </Box>
                    </ScrollView>
                    <Center>
                        <HStack style={main_menu.flexContainer}>
                            <Text style={main_menu.categories}>Drink</Text>
                        </HStack>
                    </Center>
                    <ScrollView horizontal={true}>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/tea.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Tea</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>2$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/coffee.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Coffee</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>3$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/boba.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Boba</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>3$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/milk.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Tropical</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>3$</Text>
                        </Box>
                        <Box style={main_menu.SmallBox}>
                            <Image style={main_menu.food} source={require("../image/shake.png")} alt={"food"}/>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>Shake</Text>
                            <Text textAlign={'center'} fontSize={14} style={main_menu.basicText}>2.50$</Text>
                        </Box>
                    </ScrollView>
                </LinearGradient>
            </ScrollView>
        </NativeBaseProvider>
    )
}