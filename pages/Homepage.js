import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { authLogout } from "../redux/users/UserSlice";

export default function Homepage({navigation}) {
  const dispatch = useDispatch();

  const removeToken = () => {
    dispatch(authLogout())
      .unwrap()
      .then(() => navigation.navigate("Login"));
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Regular" }}>Mansea</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={()=>navigation.navigate("Usage")}>
        <Text>Go To Usage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={removeToken}>
        <Text>Remove Token</Text>
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
