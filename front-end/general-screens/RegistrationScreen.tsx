import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { g_styles } from "./GeneralStyle";

import {StyleSheet, TextInput} from "react-native";
import { View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {Checkbox, Input, NativeBaseProvider, Button, Radio, FormControl } from "native-base";



export const styles = StyleSheet.create({
    screen: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    h1 : {
        fontSize: 34,
        fontWeight: 'bold',
        marginLeft: 22,
        textAlign: 'center',
        marginRight: 22,
        marginTop: 36,
        color: "#ffffff",
    },
    h2 : {
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 32,
        marginRight: 32,
        marginTop: 6,
        marginBottom: 0,
        color: "#ffffff",
    },
    formout: {

        marginTop: '45px',
        // height: '100%',
        display: 'flex',
        alignItems: 'center',
        // height: 'auto',
        width: '100%',
    },

    form : {
        width: '70%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        maxHeight: '500px'

    },
    input : {
        backgroundColor: '#F6F6F6',
        marginTop: 16,
        padding: 10,
        borderRadius: 10,

    },

    inputFirst : {
        marginTop: 0,

    },
    bottomText : {
        position: 'absolute',
        bottom: "30px"

    },
    checkbox : {
      fontWeight: "bold",
      type: 'checkbox',
      fontSize: 14,
      marginTop: 10,
    color: "#ffffff",
    borderRadius: 9,
    },
    policy: {

        color: "#ffffff",
    }
});

import {useState} from 'react';


export function RegistrationScreen() {
    const [formData, setData] = useState({});
    const [errors, setErrors] = React.useState({});

    const requiredFields = [
        "username",
        "email",
        "password",
        "birth",
        "gender",
        "pin",
    ]

  const validate = () => {
    console.log(requiredFields)
    let newErrors = {}
    requiredFields.forEach((nsame, index, arr) => {

        if (formData[nsame] === undefined || formData[nsame] === "") {
            newErrors[nsame] = 'required'
          setErrors(newErrors);
        }
    }
    )
    return Object.keys(errors).length === 0;



  };
  const onSubmit = () => {
    setErrors({});
    validate() ? console.log('Submitted') : console.log('Validation Failed');
  };

  console.log(errors);




  return (

  <View style={[g_styles.container_app, styles.screen]}>
    <LinearGradient
        colors={['rgba(22,6,81,100)', 'transparent']}
        style={[g_styles.background, styles.screen]} >



    <Text style={styles.h1}>Create a New Account</Text>
    <Text style={styles.h2}>Create an account so you can manage your fancy life</Text>
    <View style={styles.formout}>
    <View style={styles.form}>
                        <TextInput style={[styles.input, styles.inputFirst]} isInvalid={'username' in errors} color='white' placeholder="Username" onChangeText={value => setData({ ...formData, username: value })} />
                        <TextInput style={styles.input} isInvalid={'email' in errors} color='white' placeholder="Email" onChangeText={value => setData({ ...formData, email: value })} />
                        <TextInput style={styles.input} isInvalid={'password' in errors} color='white' placeholder="Password" onChangeText={value => setData({ ...formData, password: value })} />
                        <TextInput style={styles.input} isInvalid={'birth' in errors} color='white' placeholder="Birth" onChangeText={value => setData({ ...formData, birth: value })} />
                        <TextInput style={styles.input} isInvalid={'gender' in errors} color='white' placeholder="Gender" onChangeText={value => setData({ ...formData, gender: value })} />
                        <TextInput style={styles.input} isInvalid={'pin' in errors} color='white' placeholder="Pin" onChangeText={value => setData({ ...formData, pin: value })} />
        <View style={styles.checkbox}>
      <label>
        <input type="checkbox" />
                        <Text style={styles.policy}>I agree to the Terms of Service and Privacy Policy</Text>
      </label>
      </View>
                      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
                        Submit
                      </Button>
      </ View>
      </ View>

    <Text style={styles.bottomText}>Already have an account?<span>Log in</span></Text>
  </LinearGradient>
  </View>
  );
}
