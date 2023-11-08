import React, { useMemo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Modal,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { getLocales } from "expo-localization";
import useUserDataLogic from "../../src/lib/logic/UserDataLogic";
import translations from "../../src/lib/lang/translations.json";
import ManageDetails from "../../src/components/ManageDetails";

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
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={styles.head}>{translatedText}</Text>
        </View>
        <View style={styles.detailContainer}>
          <ManageDetails />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.button}>Go to Home</Text>
        </TouchableOpacity>
      </View>
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
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 28,
    //justifyContent: "center",
    padding: 20,
  },
  head: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  detailContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    marginVertical: 20,
  },
  button: {
    fontSize: 14,
    marginVertical: 10,
    color: "green",
    fontWeight: "bold",
  },
});
