import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from "../pages/Homepage";
import UsageScreen from "../pages/UsageScreen";
import TabNavigation from "./TabNavigation";
import ScanScreen from "../pages/ScanScreen";

const Stack = createNativeStackNavigator();

export default function AppStack() { //Stack Screen Navigation only for registered user

  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen name="Tab" component={TabNavigation}  options={{ headerShown: false }}/>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Usage" component={UsageScreen} />
      <Stack.Screen name="ScanScreen" component={ScanScreen} />
    </Stack.Navigator>
  );
}
