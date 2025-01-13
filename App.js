import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native"; // Исправлено, чтобы использовать SafeAreaView из react-native
import NavBar from "./components/Navbar";
import Main from "./components/Main/Main";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <StatusBar />
        <NavBar />
        <Main />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    flex: 1,
    backgroundColor: "#cdf2e5",
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },
  statusbar: {
    backgroundColor: "#cdf2e5",
  },
});
