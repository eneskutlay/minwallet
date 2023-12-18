import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { getLocales } from "expo-localization";
import translations from "../../src/lib/lang/translations.json";
import ManageDetails from "../../src/components/ManageDetails";
import UserDetailsBySlug from "../../src/components/UserDetailsBySlug";

export default function DetailsPage() {
  const router = useRouter();
  const { slug } = useLocalSearchParams();
  const currentLocale = getLocales()[0].languageCode;

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
        <View style={styles.detailList}>
          <UserDetailsBySlug slug={slug} />
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
  detailList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginVertical: 20,
  },
  detailContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    fontSize: 14,
    marginVertical: 10,
    color: "green",
    fontWeight: "bold",
  },
});
