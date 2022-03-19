import React, {View} from "react-native";
import { NativeBaseProvider, Center } from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles } from "./GeneralStyle";

export const MainScreen = function(): JSX.Element {
    return(
        <NativeBaseProvider>
            <View style={g_styles.container_app}>
                <LinearGradient
                    colors={['rgba(22,6,81,100)', 'transparent']}
                    style={g_styles.background}
                >
                    <Center>
                    </Center>
                </LinearGradient>
            </View>
        </NativeBaseProvider>
        )
}