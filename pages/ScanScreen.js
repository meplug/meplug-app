import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");

  const askForCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  // Request camera permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happends when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
  };

  // Check if we have permission to use the camera
  if (hasPermission === null) {
    return (
    <View style={styles.container}>
      <Text>Requesting for camera permission</Text>
    </View>);
  }

  if (hasPermission === false) {
    return (
    <View style={styles.container}>
      <Text style={{margin: 10}}>No access to camera</Text>
      <Button title="Allow the camera" onPress={() => askForCameraPermission()} />
    </View>);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.barcodebox}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ height: 400, width: 400}}/>
      </Text>
      <Text style={styles.text}>{text}</Text>
      {scanned && <Button title="Scan Again?" onPress={() => setScanned(false)} color='tomato'/>}
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
  text: {
    color: "black",
    fontSize: 12,
    paddingBottom: 15,
    fontFamily: "Regular",
  },
  barcodebox: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: 10,
    margin: 10,
    height: 300,
    width: 300,
    borderRadius: 30,
    backgroundColor: "tomato",
  }
});

