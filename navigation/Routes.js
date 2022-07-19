import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react'
import Appstack from './AppStack';



export default function Routes() {
  return (
    <NavigationContainer>
        <Appstack/>
    </NavigationContainer>
  )
}