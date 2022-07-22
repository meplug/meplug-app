import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authlogin, getLoadingStatus } from "../redux/users/UserSlice";
import { Input } from "../components/Input";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector(getLoadingStatus);

  const handleLogin = async () => {
    dispatch(authlogin({ email: email, password: password }))
      .unwrap()
      .catch((error) => Alert.alert(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>

      <Text style={styles.inputText}>Email</Text>
      <Input
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        keyboardType={"email-address"}
      />
      <Text style={styles.inputText}>Password</Text>
      <Input
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{
            color: "#0BA3FC",
            fontFamily: "Regular",
            fontSize: 15,
          }}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          สมัครสมาชิก
        </Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091D42",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 25,
    paddingBottom: 15,
    fontFamily: "Regular",
  },
  button: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  input: {
    marginVertical: 7,
    width: 260,
    fontSize: 16,
    padding: 5,
    marginBottom: 7,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingLeft: 15,
  },
  inputText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Regular",
  },
  loginButton: {
    marginVertical: 30,
    backgroundColor: "#047FC7",
    width: 125,
    height: 40,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
  },
  loginButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: "Regular",

    fontSize: 18,
    marginTop: 6,
  },
});
