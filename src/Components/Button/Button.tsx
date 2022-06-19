import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
interface ButtonProps {
    text: string;
    OnPress: () => void;
    containerStyles?: object,
}

const Button = ({ text, OnPress, containerStyles }: ButtonProps) => {
    return (
        <Pressable onPress={OnPress} style={[styles.root, containerStyles]} >
            <Text style={styles.text} >{text}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#e47911',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10,
        height:35,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#a15e1b'
    },
    text:{
        fontSize:16,
    },
})