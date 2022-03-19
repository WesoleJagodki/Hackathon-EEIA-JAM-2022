import * as React from 'react';
import { Text, Image, View, HStack } from 'native-base';

import { button_style } from './ButtonStyle';

interface ImageButtonProps {
    text: string;
    img?: JSX.Element;
    onClick?: any;
}

export const ImageButton = function ({ text, img, onClick }: ImageButtonProps): JSX.Element {
    return (
        <View onStartShouldSetResponder={onClick}>
            <HStack style={button_style.background}>
                {img || <></>}
                <Text style={button_style.button_text_security}> {text} </Text>
                <Image
                    style={button_style.image}
                    source={require("../image/Stroke-1.png")}
                />
            </HStack>
        </View>
    );
}
