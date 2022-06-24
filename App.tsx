import { StyleSheet, Text, View, useColorScheme, StatusBar, } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AddressScreen from './src/Screens/AddressScreen/AddressScreen';
import Navigation from './src/Router/Navigation';
import { Amplify } from 'aws-amplify'
// import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={styles.backgroundStyle} >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  }
})