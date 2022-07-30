import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../redux/users/UserSlice";

export default function MoreScreen() {
  const user = useSelector(getUsers);

  return (
    <>

        <View style={styles.container}>
          <Text>{user[0].email}</Text>
          <Text>Hi</Text>
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
