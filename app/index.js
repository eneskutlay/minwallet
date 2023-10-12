import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import useUserDataLogic from "../src/lib//logic/UserDataLogic";
import OnboardingPage from "./onboarding";
import Home from "./home";

export default function App() {
  const { dataLoaded } = useUserDataLogic();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="#1C1C1E" />
      <View style={styles.header}>
        {dataLoaded ? <Home /> : <OnboardingPage />}
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
    backgroundColor: "#1C1C1E",
  },
});
