import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { getUsers } from "../redux/users/UserSlice";

export default function WalletScreen({navigation}) {

  const user = useSelector(getUsers);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Wallet</Text>
      <View style={styles.Button}>
        <Text style={{color: "white", fontSize: 20, fontFamily: "Regular"}}>ME WALLET</Text>
        <Text style={{color: "white", fontSize: 15, fontFamily: "Regular"}}>฿{user[0].balance}</Text>
      </View>
      <TouchableOpacity style={styles.topupButton} onPress={() => navigation.navigate("TopupScreen")}>
        <Text style={{color: "#0C40C8", fontSize: 15, fontFamily: "Regular"}}>+ เติมเงิน</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    overflow: "hidden",
    marginHorizontal: "2%",
    backgroundColor: "#0C40C8",
    margin: 10,
    width: 350,
    height: 104,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    padding: 10
  },
  title: {
    fontSize: 25,
    fontFamily: "Bold",
    color: "#0D3292",
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: "2%"
  },
  topupButton: {
    overflow: "hidden",
    marginHorizontal: "2%",
    margin: 10,
    width: 350,
    height: 45,
    borderRadius: 8,
    borderColor: "#0C40C8",
    borderWidth: 2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  }

});
