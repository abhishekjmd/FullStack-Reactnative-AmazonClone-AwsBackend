import { StyleSheet, View, FlatList, Text } from 'react-native'
import React, { useState } from 'react'
import CartProductItem from '../../Components/CartProductItem/CartProductItem'
import cart from '../../data/cart'
import Button from '../../Components/Button/Button'

const ShoppingCartScreen = () => {
    const totalPrice = cart.reduce(
        (summedPrice, product) =>
            summedPrice + product.item.price * product.quantity,
        0,
    );
    return (
        <View>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <CartProductItem cartItem={item} />
                }
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ fontSize: 18, }} >
                            Subtotal ({cart.length} items) :{' '}
                            <Text style={{ color: '#e47911' }} > ${totalPrice.toFixed(2)} </Text>
                        </Text>
                        <Button text='Proceed to checkout'
                            OnPress={() => console.warn('go to checkout')}
                            containerStyles={{ backgroundColor: '#f7e300', borderColor: '#c7b702' }}
                        />
                    </View>
                )}
            />
        </View>
    )
}

export default ShoppingCartScreen

const styles = StyleSheet.create({})