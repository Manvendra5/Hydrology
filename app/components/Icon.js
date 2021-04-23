import React from 'react';
import { View } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons';

function Icon({name, size=40, backgroundColor="#000", iconColor="#fff"}) {
    return (
        // in JS if Value and property are the same like below in style then there is no need to write property: value, just write property. eg: below see backgroundColor 
        <View style={{
            width:size,
            height: size,
            borderRadius: size/2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size*0.5}/>
        </View>
    );
}

export default Icon;