import React from "react";
import { StyleSheet, View } from "react-native";
import { getLocales } from "expo-localization";
import PrimaryButton from "../../src/components/Buttons";
import { Title } from "../../src/components/Texts";
import { clearAllData } from "../../src/lib/storage";
import translations from "../../src/lib/lang/translations.json";

export default function Home({ userData }) {
  const currentLocale = getLocales()[0].languageCode;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title>{translations[currentLocale].homeTitle}</Title>
      </View>
      <View style={styles.body}></View>
      <View style={styles.footer}>
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
  footer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    height: "auto",
  },
});
