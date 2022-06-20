import { Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
interface CartProductItemProp {
    cartItem: {
        id: string,
        quantity: number,
        option?: string,
        item: {
            id: string;
            title: string;
            image: string;
            avgRating: number;
            ratings: number;
            price: number;
            oldPrice?: number;
        };
    }
}
const CartProductItem = ({ cartItem }: CartProductItemProp) => {
    const { quantity: quantityProp, item } = cartItem;
    const [quantity, setQuantity] = useState(quantityProp);
    const navigation = useNavigation();
    return (
        <Pressable
            
            style={styles.root}>
            <View style={styles.row}>
                <Image
                    style={styles.image}
                    source={{ uri: item.image }} />
                <View style={styles.rightContainer} >
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    <View style={styles.rating} >
                        {[0, 0, 0, 0, 0].map((el, i) => (
                            <FontAwesome
                                key={`${item.id}-${i}`}
                                style={styles.star}
                                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                                size={18}
                                color={'#e47911'} />
                        ))}
                        <Text> {item.ratings} </Text>
                    </View>
                    <Text
                        style={styles.price}>{item.price}
                        {item.oldPrice &&
                            <Text style={styles.Oldprice}>  {item.oldPrice}</Text>
                        }
                    </Text>
                </View>
            </View>
            <View style={styles.quantityContainer} >
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </View>
        </Pressable>
    )
}

export default CartProductItem
