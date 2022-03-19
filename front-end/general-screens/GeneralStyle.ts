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
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 39,
        marginRight: 39,
        marginTop: 103,
    },
    button1: {
        width: 140,
        height: 40,
        fontSize: 20,
    },
    button2: {
        width: 140,
        height: 40,
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: "bold"
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
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
    }
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
        marginTop: 200,
        width: 200,
    }
});