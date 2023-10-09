import React from "react";
import { StyleSheet, View } from "react-native";
import { getLocales } from "expo-localization";
import { Title } from "../../src/components/Texts";
import PrimaryButton from "../../src/components/Buttons";
import Onboarding from "../../src/container/Onboarding";
import { getAllData, clearAllData } from "../../src/lib/storage";
import translations from "../../src/lib/lang/translations.json";

export default function OnboardingPage() {
  const currentLocale = getLocales()[0].languageCode;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title>{translations[currentLocale].welcomeMessage}</Title>
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
    </View>
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