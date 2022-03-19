import React, {Image, Text, View, Button, Alert} from "react-native";
import {login_screen} from "./GeneralStyle";

import city from "../image/city.png";
import sub from "../image/FANCITY.png";

export const LoginScreen = function(): JSX.Element {
    return(
        <View>
            <Image
                style={login_screen.logo1}
                source={city}
            />
            <Image
                style={login_screen.logo2}
                source={sub}
            />
            <Text style={login_screen.h2}>closed, luxurious city in your pocket</Text>

            <View style={login_screen.buttons}>
                <Button
                    title="Left button"
                    onPress={() => Alert.alert('Left button pressed')}
                />
                <Button
                    title="Right button"
                    onPress={() => Alert.alert('Right button pressed')}
                />
            </View>
        </View>
    )
}