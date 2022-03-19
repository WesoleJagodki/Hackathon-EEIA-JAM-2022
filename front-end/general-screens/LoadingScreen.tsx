import React, {Image, Text, View} from "react-native";
import {loading_screen} from "./GeneralStyle";

import city from "../image/city.png";
import sub from "../image/FANCITY.png";

export const LoadingScreen = function(): JSX.Element {
    return(
        <View>
            <Image
                style={loading_screen.logo1}
                source={city}
            />
            <Image
                style={loading_screen.logo2}
                source={sub}
            />
            <Text style={loading_screen.h2}>closed, luxurious city in your pocket</Text>
        </View>
    )
}