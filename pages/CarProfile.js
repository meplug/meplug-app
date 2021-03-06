import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

export default function CarProfile({ navigation }) {
  return (
    <SafeAreaView style={{ paddingLeft: 10, paddingRight: 10 }}>
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={25} color="#0C40C8" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>รถของคุณ</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("AddCarScreen")}>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="plus" size={20} color="#0C40C8" />
            <Text style={styles.cardText}>รถของคุณ</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: "Bold",
    color: "#0D3292",
    paddingBottom: 20,
    marginLeft: "2%",
  },
  card: {
    width: 164,
    height: 196,
    borderRadius: 10,
    borderColor: "#0C40C8",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "#0C40C8",
    fontSize: 15,
    fontFamily: "Regular",
    paddingLeft: 5,
  },
});
