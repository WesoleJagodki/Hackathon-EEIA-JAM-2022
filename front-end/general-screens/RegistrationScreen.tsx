import React, { useState } from "react";
import { g_styles } from "./GeneralStyle";
import { StyleSheet, TextInput } from "react-native";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "native-base";

export const styles = StyleSheet.create({
  screen: {
    height: 23,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  h1: {
    fontSize: 34,
    fontWeight: "bold",
    marginLeft: 22,
    textAlign: "center",
    marginRight: 22,
    marginTop: 36,
    color: "#ffffff",
  },
  h2: {
    textAlign: "center",
    fontSize: 20,
    marginLeft: 32,
    marginRight: 32,
    marginTop: 6,
    marginBottom: 0,
    color: "#ffffff",
  },
  formout: {
    marginTop: "45px",
    // height: '100%',
    display: "flex",
    alignItems: "center",
    // height: 'auto',
    // width: "100%",
  },

  form: {
    // width: "70%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // height: "100%",
    maxHeight: "500px",
  },
  input: {
    backgroundColor: "#F6F6F6",
    marginTop: 16,
    padding: 10,
    borderRadius: 10,
  },

  inputFirst: {
    marginTop: 0,
  },
  bottomText: {
    position: "absolute",
    bottom: "30px",
  },
  checkbox: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
    color: "#ffffff",
    borderRadius: 9,
  },
  policy: {
    color: "#ffffff",
  },
});

export const RegistrationScreen = function () {
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
    validate() ? console.log("Submitted") : console.log("Validation Failed");
  };

  return (
    <View style={[g_styles.container_app, styles.screen]}>
      <LinearGradient
        colors={["rgba(22,6,81,100)", "transparent"]}
        style={[g_styles.background, styles.screen]}
      >
        <Text>
          Already have an account?Log in
        </Text>
      </LinearGradient>
    </View>
  );
};
