import { Text, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
const QuantitySelector = ({ quantity, setQuantity }) => {
    const onMinusPressed = () => {
        setQuantity(Math.max(0, quantity - 1))
    };
    const onPlusPressed = () => {
        setQuantity(quantity + 1)

    }
    return (
        <View style={styles.root} >
            <Pressable onPress={onMinusPressed} style={styles.Button} >
                <Text style={styles.ButtonText}>-</Text>
            </Pressable>
            <Text style={styles.Quantity}> {quantity} </Text>
            <Pressable onPress={onPlusPressed} style={styles.Button} >
                <Text style={styles.ButtonText} >+</Text>
            </Pressable>
        </View>
    )
}

export default QuantitySelector

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        width: 100,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: '#d1d1d1',
    },
    ButtonText: {
        fontSize: 18,
    },
    Quantity: {
        color: '#007eb9'
    },
})