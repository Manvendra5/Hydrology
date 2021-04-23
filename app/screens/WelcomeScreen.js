import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from "react-native";
import AppButton from '../components/AppButton';
function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
        style={styles.background}
        source={require("../assets/toa-heftiba-W1yjvf5idqA-unsplash.jpg")}
        >
          <View style={styles.logoContainer}>
          <Text style={styles.logo}>Hydrology</Text>
          <Text style={[styles.tagline, {color: "#638d84"}]}>Let's Conserve Water</Text>
          </View>
          <View style={styles.buttonContainer}>
          <AppButton title="Login" onPress={()=> navigation.navigate("Login")}/>
          <AppButton title="Register" color="secondary" onPress={()=> navigation.navigate("Register")}/>
          </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
        width: '100%',
    },
    buttonContainer:{
        padding: 20,
        width: '100%',
    },
    logo:{
        fontSize: 45,
        color: "#00D86F",
    },
    logoContainer:{
        position:"absolute",
        top:80,
        alignItems: "center",
    },
    tagline:{

    }
})

export default WelcomeScreen;