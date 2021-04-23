import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView, View } from 'react-native';

function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        //There are Two ways to apply padding on top in an android device
        //1.
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        //2.
        paddingTop: Constants.statusBarHeight,
        flex:1,
    },
    view:{
        flex:1,
    }
})

export default Screen;
