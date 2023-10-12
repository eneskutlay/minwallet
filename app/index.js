import React, { useState, useEffect } from "react";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import useUserDataLogic from "../src/lib//logic/UserDataLogic";
import OnboardingPage from "./onboarding";
import Home from "./home";

export default function App() {
  const { dataLoaded } = useUserDataLogic();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="#1C1C1E" />
      <View style={styles.header}>
        {loading ? (
          <ActivityIndicator size="large" color="#C6C6C6" />
        ) : dataLoaded ? (
          <Home />
        ) : (
          <OnboardingPage />
        )}
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
