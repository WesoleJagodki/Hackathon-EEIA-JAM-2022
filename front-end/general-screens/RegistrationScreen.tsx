import React, { useState } from "react";
import { TextInput, View } from "react-native";
import {Text, Button, Center, Checkbox, HStack} from "native-base";
import {g_styles, registration_screen, login_screen} from "./GeneralStyle";

import { LinearGradient } from "expo-linear-gradient";

export const RegistrationScreen = function ({navigation}) {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});

  const requiredFields = [
    "username",
    "email",
    "password",
    "birth",
    "gender",
    "pin",
  ];

  const validate = () => {
    let newErrors = {};
    requiredFields.forEach((nsame: string) => {
      if (formData[nsame] === undefined || formData[nsame] === "") {
        newErrors[nsame] = "required";
        setErrors(newErrors);
      }
    });
    return Object.keys(errors).length === 0;
  };
  const onSubmit = () => {
    setErrors({});
    validate() ? navigation.navigate('LoginScreen') : console.log("Validation Failed");
  };

  return (
    <View style={[g_styles.container_app]}>
      <LinearGradient
        colors={["rgba(22,6,81,100)", "transparent"]}
        style={[g_styles.background]}
      >
        <Center>
          <Text style={registration_screen.title}>Create a New Account</Text>
          <Text style={[registration_screen.h1, registration_screen.mtop]}>Create an account so you can</Text>
          <Text style={registration_screen.h1}>manage your fancy life</Text>

          <TextInput style={[registration_screen.input,registration_screen.bmtop]} placeholder="Username" placeholderTextColor={"gray"} onChangeText={value => setData({ ...formData, username: value })} />
          <TextInput style={registration_screen.input} placeholder="Email" placeholderTextColor={"gray"} onChangeText={value => setData({ ...formData, email: value })} />
          <TextInput style={registration_screen.input} placeholder="Password" secureTextEntry={true} placeholderTextColor={"gray"} onChangeText={value => setData({ ...formData, password: value })} />
          <TextInput style={registration_screen.input} placeholder="Birth" placeholderTextColor={"gray"} onChangeText={value => setData({ ...formData, birth: value })} />
          <TextInput style={registration_screen.input} placeholder="Gender" placeholderTextColor={"gray"} onChangeText={value => setData({ ...formData, gender: value })} />
          <TextInput style={registration_screen.input} placeholder="Pin" placeholderTextColor={"gray"} onChangeText={value => setData({ ...formData, pin: value })} />

          <View style={registration_screen.mtop}>
            <Checkbox value="value"><Text style={registration_screen.policy}>I agree to the Terms of Service and Privacy Policy</Text></Checkbox>
          </View>
          <Button style={registration_screen.button} onPress={onSubmit} colorScheme="fuchsia">
            <Text style={login_screen.text}>Sign in</Text>
          </Button>
          <HStack style={registration_screen.mtop}>
            <Text style={registration_screen.policy}>Already have an account?</Text><View onTouchStart={() => navigation.navigate('LoginLoginScreen')}><Text style={[registration_screen.policy,registration_screen.login]}>Log In</Text></View>
          </HStack>
        </Center>
      </LinearGradient>
    </View>
  );
};
