import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';

import colors from '../config/colors';

const listings=[
    {
        id:1,
        title: 'A cool Graph',
        price: "xyz",
        image: require('../assets/luke-chesser-JKUTrJ4vK00-unsplash.jpg')
    },
    {
        id:2,
        title: 'Another cool Graph',
        price: "abc",
        image: require('../assets/analytics-1925495_1920.png')
    },

]

function ListingsScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({item}) =>
                    <Card title={item.title} subTitle={item.price} image={item.image} onPress={()=> navigation.navigate("ListingDetails", item)}/>
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.light,
        padding: 10
    }
})

export default ListingsScreen;