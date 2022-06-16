import { StyleSheet, Text, View, useColorScheme,StatusBar, } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';


import ProductScreen from './src/Screens/ProductScreen/ProductScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={backgroundStyle} >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ProductScreen />
    </View>
  )
}

export default App

// const styles = StyleSheet.create({})