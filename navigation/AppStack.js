import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homepage from "../pages/Homepage";
import UsageScreen from "../pages/NotificationScreen";
import TabNavigation from "./TabNavigation";
import ScanScreen from "../pages/ScanScreen";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  //Stack Screen Navigation only for registered user

  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Usage"
        component={UsageScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
