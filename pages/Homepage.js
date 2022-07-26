import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { authLogout, getUsers } from "../redux/users/UserSlice";
import { useSelector } from "react-redux";

export default function Homepage({ navigation }) {
  const dispatch = useDispatch();

  const user = useSelector(getUsers);

  const removeToken = () => {
    dispatch(authLogout()).unwrap();
  };

  return (
    <>
      {user.length > 0 ? (
        <View style={styles.container}>
          <Text style={{ fontFamily: "Regular" }}>{user[0].email}</Text>
          <StatusBar style="auto" />
          <TouchableOpacity onPress={() => navigation.navigate("Usage")}>
            <Text>Go To Usage</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={removeToken} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
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
  button: {
    marginVertical: 30,
    backgroundColor: "red",
    width: 125,
    height: 40,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Regular",
    fontSize: 18,
    marginTop: 6,
  },
});
