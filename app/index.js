import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import { Title, Hint } from "../src/components/Texts";
import Onboarding from "../src/container/Onboarding";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Title>Welcome to Minwallet</Title>
      </View>
      <View style={styles.body}>
        <View style={styles.userData}>
          <Onboarding />
        </View>
      </View>
      <View style={styles.footer}>
        <Hint>Powered by Minwallet</Hint>
      </View>
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
    padding: 20,
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
  },
  footer: {
    flex: 2,
    width: "100%",
    justifyContent: "flex-end",
    //alignItems: "center",
    height: "auto",
    padding: 14,
  },
});
