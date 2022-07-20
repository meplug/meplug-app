import { View, Text } from 'react-native'
import { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import Appstack from './AppStack';
import AuthStack from './AuthStack';

export default function Routes() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log('Token: ', token);
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    checkToken();
    setIsLoading(false);
  }, []);

  return (
    <NavigationContainer>
        {isLoggedIn ? (<Appstack/>) : (<AuthStack/>)}
    </NavigationContainer>
  )
}

