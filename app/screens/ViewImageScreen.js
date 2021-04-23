import React from "react";
import { Image, StyleSheet, View} from "react-native";
import { MaterialCommunityIcons} from '@expo/vector-icons';

//colors.js contains all the colors used very often in building the app, colors.js is the color pallete
import colors from "../config/colors"; 
 
 function ViewImageScreen(props) {
     return (
         <View style={styles.container}>
         <View style={styles.closeIcon}>
             <MaterialCommunityIcons name="close" color="white" size={30}/>
         </View>
         <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={30}/>
         </View>
         <Image resizeMode="contain" style= {styles.image} source={require("../assets/photo-1579267628167-130716f1979e.jpg")}/>
         </View>

     );
 }
 
const styles = StyleSheet.create({
    deleteIcon:{
        position: "absolute",
        top: 10,
        right: 20,
    },
    closeIcon:{
        position: "absolute",
        top: 10,
        left: 20,
    },
    container:{
        //using colors from our color pallete
        backgroundColor: colors.black,
        flex:1,
    },
    image:{
        width:"100%",
        height: "100%",
    }
})

 export default ViewImageScreen;