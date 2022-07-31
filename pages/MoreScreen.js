import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogout, getUsers } from "../redux/users/UserSlice";

export default function MoreScreen() {
  const user = useSelector(getUsers);

  const dispatch = useDispatch();

  const removeToken = () => {
    dispatch(authLogout()).unwrap();
  };
  return (
    <>
      <View style={styles.container}>
        <Text>Hi</Text>
        <TouchableOpacity onPress={removeToken}>
          <Text style={{color: 'red'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
