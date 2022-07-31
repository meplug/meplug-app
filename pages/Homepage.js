import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { authLogout, getUsers } from "../redux/users/UserSlice";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Homepage({ navigation }) {
  const dispatch = useDispatch();

  const user = useSelector(getUsers);
  console.log("User", user);

  const removeToken = () => {
    dispatch(authLogout()).unwrap();
  };

  return (
    <SafeAreaView>
      <StatusBar style="auto" backgroundColor="#0C40C8" />
      <View style={styles.header}>
        <Text style={styles.HeaderText}>ยินดีต้องรับสู่ meplug!</Text>
        <Text style={styles.HeaderText}>คุณ {user[0].name}</Text>
      </View>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CarProfile")}
      >
        <Text style={styles.buttonText}>Car Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={removeToken} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity> */}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          style={styles.button}
        >
          <Ionicons name="warning" size={40} color="#0C40C8" />
          <Text style={styles.buttonText}>แจ้งปัญหา</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CarProfile")}
        >
          <Ionicons name="car" size={40} color="#0C40C8" />
          <Text style={styles.buttonText}>รถของคุณ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <MaterialIcons name="history" size={40} color="#0C40C8" />
          <Text style={styles.buttonText}>ประวัติการใช้งาน</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ScanScreen")}
        >
          <MaterialCommunityIcons name="qrcode-scan" size={40} color="#0C40C8" />
          <Text style={styles.buttonText}>สแกน</Text>
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
  button: {
    justifyContent: "center",
    alignItems: "center",

  },
  buttonText: {
    textAlign: "center",
    color: "#0C40C8",
    fontFamily: "Regular",
    justifyContent: "center",
    fontSize: 10,
  },
  header: {
    marginBottom: 10,
    backgroundColor: "#0C40C8",
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },
  HeaderText: {
    textShadowColor: "#000000",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,
    marginLeft: 15,
    fontFamily: "Regular",
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 10,
  },
});
