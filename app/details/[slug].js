import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { getLocales } from "expo-localization";
import useUserDataLogic from "../../src/lib/logic/UserDataLogic";
import translations from "../../src/lib/lang/translations.json";

export default function DetailsPage() {
  const router = useRouter();
  const { slug } = useLocalSearchParams();
  const { userData } = useUserDataLogic();

  const currentLocale = getLocales()[0].languageCode;

  const detailsData = useMemo(() => {
    return userData[`monthly${slug.charAt(0).toUpperCase() + slug.slice(1)}`];
  }, [slug, userData]);

  const translationKey = useMemo(() => {
    if (slug === "income") {
      return "income";
    } else if (slug === "expense") {
      return "expense";
    } else if (slug === "savings") {
      return "savings";
    }
    return "defaultKey";
  }, [slug]);

  const translatedText = useMemo(() => {
    return translations[currentLocale]["details"][translationKey];
  }, [currentLocale, translationKey]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>{`${translatedText}, ${detailsData}`}</Text>
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text style={styles.button}>Go to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1C1C1E",
  },
  head: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  button: {
    fontSize: 14,
    marginVertical: 10,
    color: "green",
    fontWeight: "bold",
  },
});
