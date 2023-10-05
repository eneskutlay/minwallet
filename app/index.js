import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";
import { Title } from "../src/components/Texts";
import PrimaryButton from "../src/components/Buttons";
import Onboarding from "../src/container/Onboarding";
import { getAllData, clearAllData } from "../src/lib/storage";

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
        <PrimaryButton title="Tüm verileri al" onPress={getAllData} />
        <PrimaryButton title="Tüm verileri sil" onPress={clearAllData} />
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
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "auto",
    padding: 14,
  },
});
