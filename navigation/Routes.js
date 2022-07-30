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
  const loading = useSelector((state) => state.users.loading);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token != null) {
      var decoded = jwtDecode(token);
      dispatch(fetchUserData({id: decoded._id}));
    }
  };

  useEffect(() => {
    dispatch(checkToken());
    fetchData();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {token ? <Appstack /> : <AuthStack />}
    </NavigationContainer>
  );
}
