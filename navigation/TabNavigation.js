import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UsageScreen from "../pages/UsageScreen";
import Homepage from "../pages/Homepage";
import ScanScreen from "../pages/ScanScreen";
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Scan') {
          iconName = focused ? 'scan1' : 'scan1';
        }
        else if (route.name === 'Usage') {
          iconName = focused ? 'dashboard' : 'dashboard';
        }

        // You can return any component that you like here!
        return <AntDesign name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
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
