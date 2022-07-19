import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react'
import Appstack from './AppStack';
import TabNavigation from './TabNavigation';



export default function Routes() {
  return (
    <NavigationContainer>
        <Appstack/>
    </NavigationContainer>
  )
}