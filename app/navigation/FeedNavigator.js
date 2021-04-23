import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreens from '../screens/ListingDetailsScreens';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Listings" component={ListingsScreen}/>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreens} />
    </Stack.Navigator>
);

export default FeedNavigator;