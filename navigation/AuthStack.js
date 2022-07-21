import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../pages/LoginScreen';
import RegisterScreen from '../pages/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => { //Stack Screen Navigation for authentication
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        component={LoginScreen}
        name="Login"
        options={{header: () => null}}
      />
      <Stack.Screen
        component={RegisterScreen}
        name="RegisterScreen"
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
