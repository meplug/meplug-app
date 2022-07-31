import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function TopupScreen({ navigation }) {
    const [amount, setAmount] = useState(0);

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={30} color="#0C40C8" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>เติมเงิน</Text>
        <Text style={styles.paragraph}>
          กรุณาเลือกจำนวนเงินที่ต้องการที่จะเติม
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.topupButton} onPress={() => setAmount(50.00)}>
            <Text
              style={styles.topupText}
            >
              ฿50.00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topupButton} onPress={() => setAmount(100.00)}>
            <Text
              style={styles.topupText}
            >
              ฿100.00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topupButton} onPress={() => setAmount(200.00)}>
            <Text
              style={styles.topupText}
            >
              ฿200.00
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.topupButton}>
            <Text
              style={styles.topupText}
            >
              เลือกจำนวนเงินเอง
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text
              style={styles.buttonText}
            >
              ยืนยัน
            </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: "Bold",
    color: "#0D3292",
    paddingBottom: 20,
    marginLeft: "2%",
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 15,
    fontFamily: "Regular",
    color: "#000",
    textAlign: "center",
  },
  topupButton: {
    overflow: "hidden",
    marginHorizontal: "2%",
    marginBottom: 20,
    borderRadius: 8,
    borderColor: "#0C40C8",
    borderWidth: 2,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  topupText: {
    color: "#0C40C8",
    fontSize: 15,
    fontFamily: "Regular",
  },
  Button: {
    backgroundColor: "#0C40C8",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    width: 157,
    height: 51,
    borderRadius: 15,
  },
  buttonText: {
    color: "#ffff",
    fontSize: 15,
    fontFamily: "Regular",
  },
});
