import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useState } from "react";

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    //Login Screen Design Template
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>

      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.container}
        keyboardType={"email-address"}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.container}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>

      <Text>Isn't have an account?</Text>
      <TouchableOpacity>
        <Text
          style={{
            color: '#0BA3FC',
            fontFamily: 'Regular',
            fontSize: 15,
          }}
          onPress={() => navigation.navigate('RegisterScreen')}>
          สมัครสมาชิก
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    margin: 10,
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
});
