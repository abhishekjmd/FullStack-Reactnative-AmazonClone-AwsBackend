import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import ProductItems from '../../Components/HomeScreenComponent/ProductItems'
import products from '../../data/products'

const HomeScreen = ({searchValue}:{searchValue: string}) => {
    console.log(searchValue)
    return (
        <View>
            <FlatList
                data={products}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <ProductItems item={item} />
                }
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})