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
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Usage" component={UsageScreen} />
    </Tab.Navigator>
  );
}
