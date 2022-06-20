import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// Importing screens
import HomeStack from './HomeStack';
import ProductScreen from '../Screens/ProductScreen/ProductScreen';
import AddressScreen from '../Screens/AddressScreen/AddressScreen';
import ShoppingCartStack from './ShoppingCartStack';
import Entypo from 'react-native-vector-icons/Entypo'
const BottomTabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#e47911',
                tabBarInactiveTintColor: '#ffbd7d'
            }} >
            <Tab.Screen
                name='home'
                component={HomeStack}
                options={{
                    headerShown:false,
                    'tabBarIcon': (({ color }) =>
                        <Entypo name='home' color={color} size={20} />
                    )
                }}
            />
            <Tab.Screen
                name='product'
                component={ProductScreen}
                options={{
                    'tabBarIcon': (({ color }) =>
                        <Entypo name='user' color={color} size={20} />
                    )
                }}
            />
            <Tab.Screen
                name='Address'
                component={AddressScreen}
                options={{
                    'tabBarIcon': (({ color }) =>
                        <Entypo name='menu' color={color} size={20} />
                    )
                }}
            />
            <Tab.Screen
                name='shopping'
                component={ShoppingCartStack}
                options={{
                    'tabBarIcon': (({ color }) =>
                        <Entypo name='shopping-cart' color={color} size={20} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default BottomTabNav