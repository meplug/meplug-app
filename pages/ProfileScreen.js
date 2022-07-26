import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../redux/users/UserSlice";

export default function ProfileScreen() {
  const user = useSelector(getUsers);

  return (
    <>
      {user.length > 0 ? (
        <View style={styles.container}>
          <Text>{user[0].email}</Text>
        </View>
      ) : null}
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
