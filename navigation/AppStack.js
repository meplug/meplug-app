import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from "../pages/Homepage";
import UsageScreen from "../pages/UsageScreen";


const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Homepage">
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Usage" component={UsageScreen} />

    </Stack.Navigator>
  );
}
