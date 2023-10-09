import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { getLocales } from "expo-localization";
import PrimaryButton from "../../src/components/Buttons";
import { Title } from "../../src/components/Texts";
import { clearAllData } from "../../src/lib/storage";
import translations from "../../src/lib/lang/translations.json";
import { getData } from "../../src/lib/storage";

export default function Home({ userData }) {
  const [userName, setUserName] = useState(null);
  const currentLocale = getLocales()[0].languageCode;

  useEffect(() => {
    async function fetchUserName() {
      // Veriyi almadan önce 4 saniye bekleyin
      const username = await getData("Kullanıcı Adı");
      setUserName(username);
    }

    fetchUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title>{translations[currentLocale].homeTitle}</Title>
      </View>
      <View style={styles.body}>
        {userName ? (
          <Title>{userName}</Title>
        ) : (
          <Title>Kullanıcı adı yükleniyor...</Title>
        )}
      </View>
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
