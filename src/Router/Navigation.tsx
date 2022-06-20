import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Importing screens
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProductScreen from '../Screens/ProductScreen/ProductScreen';
import AddressScreen from '../Screens/AddressScreen/AddressScreen';
import ShoppingCartScreen from '../Screens/ShoppingCartScreen/ShoppingCartScreen';
import BottomTabNav from './BottomTabNav';
import HomeStack from './HomeStack';

const Navigation = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="HomeTab" component={BottomTabNav} options={{ headerShown:false }} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation