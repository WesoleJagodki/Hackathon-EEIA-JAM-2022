import { StyleSheet } from "react-native";

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
});

export const loading_screen = StyleSheet.create({
    logo1: {
        marginTop: 131,
        height: 350,
        width: 350,
    },
    logo2: {
        marginTop: 55,
        height: 36,
        width: 204,
    },
    h2: {
        color: "#F9A88F",
        marginTop: 27,
        fontSize: 20,
    },
});

export const login_screen = StyleSheet.create({
    logo1: {
        marginTop: 81,
        height: 350,
        width: 350,
    },
    logo2: {
        marginTop: 55,
        height: 36,
        width: 204,
    },
    h2: {
        color: "#F9A88F",
        marginTop: 27,
        fontSize: 20,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 103,
    },
    button1: {
        width: 140,
        height: 40,
        marginRight: 20,
    },
    button2: {
        width: 140,
        height: 40,
        marginLeft: 20,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export const Help_FAQ = StyleSheet.create({
    mainText: {
        color: 'white',
        fontSize: 36,
        textAlign: "center",
        marginTop: 70,
        marginBottom: 20,
    },
    boxText: {
        display: "flex",
        marginTop: 10,
        marginBottom: 20,
        padding: 20,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        width: 250,
        borderRadius: 25,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
    },
    botton: {
        marginTop: 20,
        marginBottom: 50,
        width: 230,
        height: 40,
    }
});

export const Security_style = StyleSheet.create({
    mainText: {
        color: 'white',
        fontSize: 36,
        textAlign: "center",
        marginTop: 70,
        marginBottom: 20,
    },
})

export const settings_styles = StyleSheet.create({
    settings_list: {
        width: 300,
        alignSelf: 'center',
        marginTop: 50,
        marginRight: 10,
    },

    heading: {
        color: 'white',
        fontSize: 48,
        alignSelf: 'center',
        paddingTop: 90,
    },

    title: {
        textAlign: 'center',
        paddingTop: 90,
        marginBottom: 20,
        fontSize: 36,
        color: 'white',
    },
});

export const preferences_screen = StyleSheet.create({
   label: {
        fontSize: 22,
        color: 'white',
    },
    selection: {
        fontSize: 22,
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: "white",
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
    },
    button: {
        marginTop: 475,
        width: 230,
        height: 40,
    },
});

export const security_screen = StyleSheet.create({
    key: {
        height: 19,
        width: 20,
    },
    shield: {
        marginLeft: 3,
        marginRight: 3,
        height: 20,
        width: 16,
    },
    questionmark: {
        height: 24,
        width: 24,
    },
    menuButton: {
        marginTop: 400,
        width: 230,
        height: 40,
    }
});

export const registration_screen = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 34,
        paddingTop: 90,
    },
    mtop: {
        marginTop: 20,
    },
    bmtop: {
        marginTop: 40,
    },
    h1: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#F6F6F6",
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        width: 310,
        color: 'black',
    },
    policy: {
        color: 'white',
        fontSize: 13,
        marginLeft: 5,
    },
    button: {
        width: 140,
        height: 40,
        marginTop: 39,
    },
    login: {
        marginLeft: 5,
        color: '#FFA68B',
        fontWeight: "bold",
    },
});

export const achivements_styles = StyleSheet.create({
    alpaca_img: {
        height: 300,
        width: 300,
    },
    centred_text: {
        fontSize: 30,
        color: 'white',
       paddingTop: 10,
    },
    mini_alpacas: {
        marginTop: 15,
    },
    alpaca_mini: {
        height: 100,
        width: 100,
    },
    button: {
        marginTop: 45,
        width: 230,
        height: 40,
    },
});

export const login_login_screen = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
    },
    recovery : {
        alignSelf: 'flex-end',
        marginTop: 20,
    },
    login: {
        color: 'lightgray',
        fontWeight: "bold",
    },
});

export const account_screen = StyleSheet.create({
    big_image: {
        width: 80,
        height: 80
    },

    small_image: {
        width: 40,
        height: 40,
        marginTop: 10
    },

    centred_text: {
        color: 'white',
        fontSize: 24
    },

    small_centred_text: {
        color: 'white',
        fontSize: 18
    },

    button: {
        marginTop: 140,
        width: 300,
    }
});
