import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UsageScreen from "../pages/UsageScreen";
import Homepage from "../pages/Homepage";
import ScanScreen from "../pages/ScanScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Usage"
        component={UsageScreen}
        options={{ header: () => null }}
      />
    </Tab.Navigator>
  );
}
