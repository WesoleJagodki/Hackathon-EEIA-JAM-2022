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
    logout: {
      marginTop: 320,
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

export const information_screen = StyleSheet.create({
   header: {
       color: 'white',
       fontSize: 36,
       textAlign: "center",
       marginTop: 70,
       marginBottom: 20,
   },
    text: {
        marginTop: 33,
        width: 310,
        color: 'white',
        fontSize: 13,
        textAlign: "justify",
    },
    list: {
        color: 'white',
        fontSize: 13,
        marginTop: 5,
        width: 310,
        textAlign: "justify",
    },
    header2: {
        color: 'white',
        fontSize: 22,
        width: 310,
        textAlign: "justify",
        marginTop: 87,
    },
    image1: {
        width: 200,
        height: 200,
    },
    image2: {
        width: 190,
        height: 100,
        marginTop: 50,
    },
    image3: {
        width: 200,
        height: 75,
        marginTop: 20,
    },
    button: {
        marginTop: 40,
        marginBottom: 50,
        width: 230,
        height: 40,
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
        fontSize: 24,
        paddingTop: 15,
    },

    small_centred_text: {
        color: 'white',
        fontSize: 18,
        paddingTop: 10
    },

    button: {
        marginTop: 230,
        width: 230,
        height: 40,
    }
});

export const main_menu = StyleSheet.create({
    hello: {
        fontSize: 22,
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: {height: 3, width: 0},
        textShadowRadius: 5,
        marginLeft: 35,
        marginTop: 10,
    },
    smallHello: {
        fontSize: 12,
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: {height: 3, width: 0},
        textShadowRadius: 5,
        marginLeft: 35,
    },
    categories: {
        marginTop: 5,
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
        margin: 5,
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
    },
    basicBox: {
        width: 330,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginTop: 10,
        marginBottom: 15,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
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
        height:180,
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
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 320,
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
    seeAll1: {
        color: '#9A16A3',
        fontSize: 18,
        position: 'absolute',
        left: 300,
        marginTop: 48,
    },
    readMore: {
        color: '#9A16A3',
        fontSize: 12,
        marginTop: 3,
    },
    hand: {
        marginTop: 7,
        marginLeft: 5,
    },
    button: {
        width: 140,
        height: 40,
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    logo: {
        position: "absolute",
        left: 200,
        width: 70,
        height: 70,
        marginTop: -10,
    },
    logotext: {
        position: "relative",
        color: 'white',
        fontSize: 18,
        marginTop: 5,
        left: 100,
    },
    arrowback: {
        width: 24,
        height: 35,
        position: "relative",
        marginTop: 73,
        marginRight: 70,
    },
    shop: {
        width: 24,
        height: 24,
        position: "relative",
        marginTop: 80,
        marginLeft: 70,
    },
});

export const weather_styles = StyleSheet.create({
    header: {
        color: 'white',
        fontSize: 24,
        alignSelf: 'center',
        paddingTop: 2,
    },

    img: {
        position: "relative",
        width: 25,
        height: 20,
    },

    background: {
        backgroundColor: '#5a4d79',
        borderColor: '#5a4d79',
        borderRadius: 12,
        borderWidth: 4,
        width: 300
    },

    conditions: {
        width: 80,
        height: 50,
    },

    top: {
        marginLeft: 30
    }
});

export const health_styles = StyleSheet.create({
    hello: {
        color: '#9A16A3',
        fontSize: 24,
        marginLeft: 10,
        paddingTop: 29,
    },
    gentle_ask: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 27,
    },
    info: {
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
    box: {
      marginBottom: 300,
    },
    arrowback: {
        width: 24,
        height: 35,
        position: "absolute",
        marginTop: 65,
        right: 25,
    },
    container:{
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 30,
    },
    doctor:{
        borderRadius: 15,
        height: 129,
        width: 129,
        marginLeft: 15,
        marginRight: 15,
    },
    star:{
        height: 20,
        width: 20,
    },
});