import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Homepage({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Regular" }}>Mansea</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={()=>navigation.navigate("Usage")}>
        <Text>Go To Usage</Text>
      </TouchableOpacity>
    </View>
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
