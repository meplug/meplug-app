import { View, StyleSheet } from 'react-native'
import React from 'react'

import LottieView from 'lottie-react-native';

export default function Apploader() {
  return (
    <View style={[ StyleSheet.absoluteFill, styles.container ]}>
      <LottieView source={require('../assets/loader.json')} autoPlay loop/>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        zIndex: 1
    }
})