import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <Text>WalletScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
