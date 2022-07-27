import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

export default function CarProfile({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.arrowBack}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Car Profile</Text>
        </View>
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
    backgroundColor: "#0A214A",
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },
  HeaderText: {
    textShadowColor: "#000000",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,
    marginTop: 15,
    marginLeft: 15,
    fontFamily: "Regular",
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 10,
  },

  arrowBack: {
    marginTop: 13,
  },
});
