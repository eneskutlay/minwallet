import React from "react";
import { StyleSheet, View, Button, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { getLocales } from "expo-localization";
import translations from "../../src/lib/lang/translations.json";
import { getAllData } from "../../src/lib/storage";
import { Title } from "../../src/components/Texts";
import EditableUserData from "../../src/components/EditableUserData";

export default function Settings() {
  const router = useRouter();
  const currentLocale = getLocales()[0].languageCode;
  const currentTranslations = translations[currentLocale];

  const handleEdit = () => {
    // Handle any actions after data editing
    // You can add logic here if needed after editing the data
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDataContainer}>
        <Title>{currentTranslations.settings.title}</Title>
        <EditableUserData onEdit={handleEdit} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Go to Home" onPress={() => router.push("home")} />
        <Button title="Get All Data" onPress={getAllData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  userDataContainer: {
    flex: 4,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  buttonsContainer: {
    flex: 0.3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    bottom: 0,
  },
});
