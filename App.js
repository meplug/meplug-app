import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Routes from "./navigation/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

export default function App() {
  const [loaded] = useFonts({
    Regular: require("./assets/fonts/Prompt-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
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
