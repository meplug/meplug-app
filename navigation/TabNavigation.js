import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../pages/Homepage";
import ScanScreen from "../pages/ScanScreen";
import { AntDesign } from '@expo/vector-icons'; 
import ProfileScreen from "../pages/ProfileScreen";
import NotificationScreen from "../pages/NotificationScreen";
import WalletScreen from "../pages/WalletScreen";

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
        } else if (route.name === 'Wallet') {
          iconName = focused ? 'wallet' : 'wallet';
        }
        else if (route.name === 'Scan') {
          iconName = focused ? 'scan1' : 'scan1';
        }
        else if (route.name === 'Notification') {
          iconName = focused ? 'dashboard' : 'dashboard';
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user';
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
        name="Wallet"
        component={WalletScreen}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ header: () => null }}
      />
    </Tab.Navigator>
  );
}
