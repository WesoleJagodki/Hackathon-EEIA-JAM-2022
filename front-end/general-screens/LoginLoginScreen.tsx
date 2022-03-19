import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Text, Button, Center, Image, HStack } from "native-base";
import {
  g_styles,
  registration_screen,
  login_login_screen,
  login_screen,
} from "./GeneralStyle";

import { LinearGradient } from "expo-linear-gradient";

export const LoginLoginScreen = function ({ navigation }) {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});

  const requiredFields = ["email", "password"];

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
    validate()
      ? navigation.navigate("SettingsScreen")
      : console.log("Validation Failed");
  };

  return (
    <View style={[g_styles.container_app]}>
      <LinearGradient
        colors={["rgba(22,6,81,100)", "transparent"]}
        style={[g_styles.background]}
      >
        <Center>
          <View>
            <Center>
              <Text style={registration_screen.title}>Hello again!</Text>
              <Text style={[registration_screen.h1, registration_screen.mtop]}>
                Welcome back you’ve been missed!
              </Text>

              <TextInput
                style={[registration_screen.input, registration_screen.bmtop]}
                placeholder="Email"
                placeholderTextColor={"gray"}
                onChangeText={(value) => setData({ ...formData, email: value })}
              />
              <TextInput
                style={registration_screen.input}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor={"gray"}
                onChangeText={(value) =>
                  setData({ ...formData, password: value })
                }
              />
              <View onTouchStart={() => navigation.navigate("LoginScreen")} style={login_login_screen.recovery}>
                <Text style={[registration_screen.policy,login_login_screen.login]}>Recovery Password</Text>
              </View>

              <Button
                style={registration_screen.button}
                onPress={onSubmit}
                colorScheme="fuchsia"
              >
                <Text style={login_screen.text}>Log in</Text>
              </Button>
              <Image
                style={login_login_screen.image}
                source={require("../image/Saly-1.png")}
                alt="person_on_rocket"
              />
              <HStack style={registration_screen.mtop}>
                <Text style={registration_screen.policy}>Not a member?</Text>
                <View onTouchStart={() => navigation.navigate("RegistrationScreen")}>
                  <Text
                    style={[
                      registration_screen.policy,
                      registration_screen.login,
                    ]}
                  >
                    Register now
                  </Text>
                </View>
              </HStack>
            </Center>
          </View>
        </Center>
      </LinearGradient>
    </View>
  );
};
