import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor:'#fff',
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    rightContainer: {
        flex: 3,
        padding: 10,
    },
    title: {
        color: '#000',
        fontSize: 18,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2,
    },
    price: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    Oldprice: {
        fontWeight: 'normal',
        fontSize: 12,
        textDecorationLine: 'line-through',

    },
})

export default styles
