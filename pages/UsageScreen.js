import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function UsageScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>UsageScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})