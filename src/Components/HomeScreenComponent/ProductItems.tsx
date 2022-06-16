import { Text, View, Image } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
interface ProductsProp {
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
const ProductItems = ({ item }: ProductsProp) => {
    return (
        <View>
            <View style={styles.root}>
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
        </View>
    )
}

export default ProductItems
