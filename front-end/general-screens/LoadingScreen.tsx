import React, { Image, Text, View } from "react-native";
import { loading_screen,g_styles } from "./GeneralStyle";

import { LinearGradient } from 'expo-linear-gradient';

export const LoadingScreen = function ({navigation}): JSX.Element {
    return (
        <View style={g_styles.container_app}>
            <LinearGradient
                colors={['rgba(22,6,81,100)', 'transparent']}
                style={g_styles.background}>
                <View onStartShouldSetResponder={() => navigation.navigate('LoginScreen')}>
                    <Image
                        style={loading_screen.logo1}
                        source={require("../image/city.png")}
                    />
                    <Image
                        style={loading_screen.logo2}
                        source={require("../image/FANCITY.png")}
                    />
                    <Text style={loading_screen.h2}>closed, luxurious city in your pocket</Text>
                </View>
            </LinearGradient>
        </View>
    )
}