import { StyleSheet, Text, View, FlatList, Image, useWindowDimensions } from 'react-native'
import React, { useState, useCallback } from 'react'
const ImageCarousel = ({ images }: { images: [string] }) => {
  const WindowWidth = useWindowDimensions().width;
  const [ActiveIndex, setActiveIndex] = useState(0)
  const onFlatListUpdate = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image style={[styles.image, { width: WindowWidth - 40 }]} source={{ uri: item }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={WindowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 58,
        }}
        onViewableItemsChanged={onFlatListUpdate}
      />
      <View style={styles.dots} >
        {images.map((image, index) => (
          <View 
            key={index}
          style={[styles.dot,
          {
            backgroundColor: index === ActiveIndex ? '#c9c9c9' : '#ededed'
          }
          ]} />
        ))}
      </View>
    </View>
  )
}

export default ImageCarousel

const styles = StyleSheet.create({
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    backgroundColor: '#ededed',
    margin: 5,

  },
})