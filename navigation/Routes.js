import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import Appstack from "./AppStack";
import AuthStack from "./AuthStack";
import { useSelector, useDispatch } from "react-redux";
import { checkToken, fetchUserData, getToken } from "../redux/users/UserSlice";
import jwtDecode from "jwt-decode";

export default function Routes() {
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
    console.log(token)

  }, []);

  return (
    <NavigationContainer>
      {token ? <Appstack /> : <AuthStack />}
    </NavigationContainer>
  );
}
