import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, Image, View, HStack } from 'native-base';

import { button_style } from './ButtonStyle';
import arrow_image from '../image/arrow_img.svg';

const Stack = createNativeStackNavigator();

interface ImageButtonProps {
    text: string;
    img?: JSX.Element;
    onClick?: any;
}

export const ImageButton = function ({ text, img, onClick }: ImageButtonProps): JSX.Element {
    return (
        <View onStartShouldSetResponder={onClick}>
            <HStack space={3} justifyContent='left' style={button_style.background}>
                {img || <></>}
                <Text style={button_style.button_text}> {text} </Text>
                <Image source={arrow_image} style={button_style.image} alt="Go" />
            </HStack>
        </View>
    );
}
