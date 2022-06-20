import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Feather from 'react-native-vector-icons/Feather'
// Importing screens
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProductScreen from '../Screens/ProductScreen/ProductScreen';
import AddressScreen from '../Screens/AddressScreen/AddressScreen';
import ShoppingCartScreen from '../Screens/ShoppingCartScreen/ShoppingCartScreen';
interface HearderProps {
    searchValue: string,
    setSearchValue: () => void,
}
import BottomTabNav from './BottomTabNav';
const HeaderComponent = ({ searchValue, setSearchValue }: HearderProps) => {
    return (
        <View style={{ backgroundColor: '#22e3dd', height: 80 }} >
            <View
                style={
                    {
                        height: 40,
                        backgroundColor: 'white',
                        margin: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }
                } >
                <Feather name='search' size={20} />
                <TextInput
                    placeholder='search'
                    style={{ paddingLeft: 15, }}
                    value={searchValue}
                    onChangeText={setSearchValue}
                />
            </View>
        </View>
    )
}

const Navigation = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <Stack.Navigator screenOptions={{
            header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} />,
        }} >
            <Stack.Screen
                name="HomeScreen" >
                {() => <HomeScreen searchValue={searchValue}  /> }
            </Stack.Screen>
            <Stack.Screen
                name="product"
                component={ProductScreen} />
        </Stack.Navigator>
    )
}

export default Navigation