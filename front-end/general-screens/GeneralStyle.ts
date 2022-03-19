import {StyleSheet} from "react-native";

export const g_styles = StyleSheet.create({
    container_app: {
        backgroundColor: 'rgba(71, 15, 138, 100)',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    text: {
        color: 'blue',
        marginLeft: 160,
        marginTop: 50,
    },
});

export const loading_screen = StyleSheet.create({
    logo1: {
        marginLeft: 22,
        marginTop: 131,
        height: 350,
        width: 350,
    },
    logo2: {
        marginTop: 55,
        marginLeft: 93,
        height: 36,
        width: 204,
    },
    h2: {
        color: "#F9A88F",
        marginLeft: 39,
        marginTop: 27,
        fontSize: 20,
    },
});

export const login_screen = StyleSheet.create({
    logo1: {
        marginLeft: 22,
        marginTop: 81,
        height: 350,
        width: 350,
    },
    logo2: {
        marginTop: 55,
        marginLeft: 93,
        height: 36,
        width: 204,
    },
    h2: {
        color: "#F9A88F",
        marginLeft: 39,
        marginTop: 27,
        fontSize: 20,
    },
    horizontal:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 39,
        marginRight: 39,
        marginTop: 103,
    },
    button1: {
        width: 140,
        height: 40,
    },
    button2: {
        width: 140,
        height: 40,
    },
});

export const preferences_screen = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginTop: 72,
        fontSize: 36,
        color: 'white',
    },
    text1: {
        fontSize: 20,
        marginTop: 48,
        marginLeft: 52,
        color: 'white',
    },
    text2: {
        fontSize: 20,
        marginLeft: 52,
        color: 'white',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button1: {
        height: 40,
        marginTop: 40,
        backgroundColor: 'transparent',
    },
});