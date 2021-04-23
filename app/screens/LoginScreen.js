import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, ErrorMessage, SubmitButton} from '../components/forms';

const validationSchema=Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
          <View style={styles.logoContainer}>
          <Text style={styles.logo}>Hydrology</Text>
          <Text style={[styles.tagline, {color: "#638d84"}]}>Let's Conserve Water</Text>
          </View>
          <AppForm initialValues={{email: "", password: ""}} onSubmit={value=>console.log(values)} validationSchema={validationSchema} >
            <AppFormField autoCapitalize="none" autoCorrect={false} keyBoardType= "email-address" name="email" icon="email" placeholder="Email"/>
            <AppFormField autoCapitalize="none" autoCorrect={false} icon="lock" name ="password" placeholder="Password" secureTextEntry={true}/>
            <SubmitButton title ="Login" />
          </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:5,
    },
    logo:{
        fontSize: 45,
        color: "#00D86F",
    },
    logoContainer:{
        alignSelf: "center",
        marginTop:50,
        marginBottom: 20,
    },
    tagline:{
        alignSelf: "center",
    }
})

export default LoginScreen;