import React, {View} from "react-native";
import { NativeBaseProvider, Center } from "native-base";

import { LinearGradient } from 'expo-linear-gradient';
import { g_styles } from "./GeneralStyle";
import { useEffect, useState } from "react";
import { get_logged_user } from "../api/user";

export const MainScreen = function(): JSX.Element {
    const [user, setUser] = useState();
    useEffect(() => {
    (async () => {
        let userData = await get_logged_user()
        setUser(userData)
    })()
    }, [])

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