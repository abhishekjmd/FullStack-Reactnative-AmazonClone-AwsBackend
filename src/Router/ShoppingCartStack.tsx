import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Importing screens
import AddressScreen from '../Screens/AddressScreen/AddressScreen';
import ShoppingCartScreen from '../Screens/ShoppingCartScreen/ShoppingCartScreen';

const ShoppingCartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddressScreen" component={AddressScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default ShoppingCartStack