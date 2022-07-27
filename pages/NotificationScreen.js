import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function NotificationScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>NotificationScreen</Text>
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