import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native"; // Исправлено, чтобы использовать SafeAreaView из react-native
import NavBar from "./components/Navbar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cdf2e5",
  },
  statusbar: {
    backgroundColor: "#cdf2e5",
  },
});
