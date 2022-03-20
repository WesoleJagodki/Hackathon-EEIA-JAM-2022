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

export const main_menu = StyleSheet.create({
    hello: {
        fontSize: 22,
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: {height: 3, width: 0},
        textShadowRadius: 5,
    },
    smallHello: {
        fontSize: 12,
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: {height: 3, width: 0},
        textShadowRadius: 5,

    },
    categories: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    gear: {
        width: 27.5,
        height: 27.5,
        margin: 5,
    },
    travel: {
        width: 22.5,
        height: 22.5,
        margin: 5,
    },
    food:{
        margin: 8,
        height: 96,
        width: 96,
    },
    topContainer: {
        marginTop: 65,
        marginLeft: 25,
        marginRight: 17.5,
    },
    midContainer: {
        marginTop: 10,
        marginLeft: 35,
    },
    basicBox: {
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginTop: 10,
        marginBottom: 15,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginRight: 35,
    },
    basicBoxWhite: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 15,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },
    SmallBox:{
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginTop: 10,
        marginBottom: 15,
        marginRight: 10,
        padding: 10,
        height:176,
        width: 128,
    },
    SmallBoxSmall:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 15,
        marginRight: 10,
        padding: 10,
        width: 128,
        height: 72,
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 320,
        marginRight: 35,
    },
    flexContainerInside: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
    },
    flexContainerInsideDollar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 260,
    },
    basicText: {
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: {height: 2, width: 0},
        textShadowRadius: 5,
    },
    basicTextBlack: {
        color: '#19104E',
    },
    seeAll: {
        color: '#9A16A3',
        fontSize: 18,
        position: 'relative',
        marginTop: 4,
    },
    readMore: {
        color: '#9A16A3',
        fontSize: 12,
        marginTop: 3,
    },
});