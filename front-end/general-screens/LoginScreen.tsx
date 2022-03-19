import React, { Image, Text, View, Alert} from "react-native";
import { login_screen } from "./GeneralStyle";

import { NativeBaseProvider, Button } from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles } from "./GeneralStyle";

export const LoginScreen = function (): JSX.Element {
    return (
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}>
                    <Image
                        style={login_screen.logo1}
                        source={require('../image/city.png')}
                    />
                    <Image
                        style={login_screen.logo2}
                        source={require('../image/FANCITY.png')}
                    />
                    <Text style={login_screen.h2}>closed, luxurious city in your pocket</Text>

                    <View style={login_screen.buttons}>
                        <Button
                            onPress={() => Alert.alert('Left button pressed')}
                        >
                            Left button
                            </Button>
                        <Button
                            onPress={() => Alert.alert('Right button pressed')}
                        >
                            Right button
                        </Button>
                    </View>
                </LinearGradient>
            </View>

        </NativeBaseProvider>
    )
}