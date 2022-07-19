import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function UsageScreen({navigation}) {
  return (
    <View>
      <Text>UsageScreen</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Homepage")}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}