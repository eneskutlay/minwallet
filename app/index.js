import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Title, Subtitle, Paragraph } from "../src/components/Texts";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Title>Welcome to Miniwallet</Title>
      </View>
      <View style={styles.body}>
        <Subtitle>Personal Information</Subtitle>
      </View>
      <View style={styles.footer}>
        <Paragraph>Footer</Paragraph>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "70%",
    height: "130px",
    alignItems: "center",
    paddingVertical: 30,
  },
  body: {
    width: "70%",
    alignItems: "center",
    height: "80%",
  },
  footer: {
    width: "70%",
    minHeight: "64px",
    alignItems: "center",  },
});
