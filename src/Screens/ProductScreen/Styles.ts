import { StyleSheet } from 'react-native'


const Styles = StyleSheet.create({
    root:{
        margin: 10,
        padding:10,
        backgroundColor:'#fff',
    },
    title:{},
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
    description:{
        margin:10,
        lineHeight:20,
    },
})
export default Styles;