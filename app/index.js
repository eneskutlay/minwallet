import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Title, Hint } from "../src/components/Texts";
import { SignDataForm } from "../src/container/SignDataForm";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Title>Welcome to Minwallet</Title>
        <Hint>Fill completely for best performance</Hint>
      </View>
      <View style={styles.body}>
        <View style={styles.userData}>
          <SignDataForm />
        </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  header: {
    width: "100%",
    alignItems: "center",
    height: "auto",
    padding: 16,
    zIndex: 1,
  },
  body: {
    flex: 5,
    width: "100%",
    alignItems: "center",
    height: "auto",
  },
  userData: {
    width: "100%",
    alignItems: "center",
    height: "auto",
    padding: 20,
  },
  footer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    height: "auto",
  },
});
