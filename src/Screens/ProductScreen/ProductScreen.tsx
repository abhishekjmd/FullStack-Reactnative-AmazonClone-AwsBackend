import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import product from '../../data/product'
import styles from './Styles'
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../Components/QuantitySelector/QuantitySelector';
import Button from '../../Components/Button/Button';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';

const ProductScreen = () => {
    const [selectedOptions, setSelectedOptions] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false} >
            <Text style={styles.title} > {product.title} </Text>
            {/* Image carousel */}
            {/* option selector */}
            < ImageCarousel images={product.images} />
            <Picker
                selectedValue={selectedOptions}
                onValueChange={(itemValue) =>
                    setSelectedOptions(itemValue)

                }>
                {product.options.map(option => (
                    <Picker.Item label={option} value={option}
                        key={`${product.id}-${option}`}
                    />
                ))}
            </Picker>
            {/* Price */}
            <Text style={styles.price}>
                 {product.price}
                {product.oldPrice &&
                    <Text style={styles.Oldprice}>
                        {product.oldPrice}
                    </Text>
                }
            </Text>
            {/* Description */}
            <Text style={styles.description}>{product.description} </Text>
            {/* Quantity selector */}
            <QuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
            />
            {/* Buttons */}
            <Button text={'Add To Cart'} OnPress={() => (console.warn('Add to cart'))} />
            <Button text={'Buy Now'} OnPress={() => (console.warn('Buy now'))} />

        </ScrollView>
    )
}

export default ProductScreen
