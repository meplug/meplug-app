import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../pages/Homepage";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import MoreScreen from "../pages/MoreScreen";
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
        else if (route.name === 'Notification') {
          iconName = focused ? 'notification' : 'notification';
        }
        else if (route.name === 'More') {
          return <MaterialIcons name="more-horiz" size={24} color={color} />
        }

        // You can return any component that you like here!
        return <AntDesign name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#0C40C8',
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
        name="Notification"
        component={NotificationScreen}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{ header: () => null }}
      />
    </Tab.Navigator>
  );
}
