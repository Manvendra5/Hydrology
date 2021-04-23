import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';

function ListingDetailsScreens({ route }) {
    const listing =route.params;

    return (
        <View>
            <Image 
            style={styles.image}
            source={listing.image}
            />
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.span}>{listing.span}</AppText>
            <ListItem
                image={require("../assets/khadeeja-yasser-3U9L9Chc3is-unsplash.jpg")}
                title= "UserName"
                subTitle="Info"
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding: 15,
    },
    image:{
        width: '100%',
        height: 300,
    },
    span:{
        color: colors.secondary
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
    }

})
export default ListingDetailsScreens;