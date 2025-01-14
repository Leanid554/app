import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import NavBar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <NavBar />
        <Main />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cdf2e5",
  },
  scrollView: {
    flex: 1, // Обеспечивает, что ScrollView занимает всю доступную высоту
  },
  scrollContent: {
    flexGrow: 1, // Обеспечивает, что содержимое ScrollView растягивается
    paddingHorizontal: 20,
    paddingBottom: 20, // Добавляем отступ внизу, чтобы было удобно прокручивать
  },
});
