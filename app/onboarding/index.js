import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { getLocales } from "expo-localization";
import { Title } from "../../src/components/Texts";
import Onboarding from "../../src/container/Onboarding";
import translations from "../../src/lib/lang/translations.json";

export default function OnboardingPage() {
  const currentLocale = getLocales()[0].languageCode;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Title>{translations[currentLocale].welcomeMessage}</Title>
      </View>
      <View style={styles.body}>
        <View style={styles.userData}>
          <Onboarding />
        </View>
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
