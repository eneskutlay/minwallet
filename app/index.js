import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Title, Paragraph, Hint } from "../src/components/Texts";
import { TextField } from "../src/components/TextFields";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Title>Welcome to Minwallet</Title>
      </View>
      <View style={styles.body}>
        <View style={styles.infoParagraph}>
          <Hint>
            Before you start, please fill out your information completely.
          </Hint>
        </View>
        <View style={styles.userData}>
          <TextField label="Enter your name" placeholder="Your name" />
        </View>
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
    justifyContent: "center",
  },
  header: {
    width: "85%",
    minHeight: "10%",
    alignItems: "center",
    paddingTop: 30,
  },
  body: {
    width: "85%",
    alignItems: "center",
    minHeight: "80%",
  },
  infoParagraph: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",

    height: "auto",
  },
  userData: {
    marginVertical: 20,
    width: "100%",

    alignItems: "center",
    height: "auto",
  },
  footer: {
    width: "85%",
    minHeight: "10%",
    alignItems: "center",
  },
});
