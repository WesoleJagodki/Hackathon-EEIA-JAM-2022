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
    buttons:{
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

export const Help_FAQ = StyleSheet.create({
    mainText: {
        color: 'white',
        fontSize: 36,
        textAlign: "center",
        marginTop: 30,
    },
    boxText: {
        display: "flex",
        marginTop: 20,
        padding: 20,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        width: 250,
        borderRadius: 25,
    },
    header: {
        fontSize: 20,
    }
});