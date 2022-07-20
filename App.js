
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Routes from "./navigation/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  const [loaded] = useFonts({
    Regular: require("./assets/fonts/Prompt-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
