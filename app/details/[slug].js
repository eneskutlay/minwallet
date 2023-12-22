import React from "react";
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

export default function DetailsPage() {
  const router = useRouter();
  const { slug } = useLocalSearchParams();
  const currentLocale = getLocales()[0].languageCode;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.heading}>
          {translations[currentLocale].details[slug].title}
        </Text>
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
    backgroundColor: "#1C1C1E",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  footer: {
    padding: 10,
    backgroundColor: "#1C1C1E",
  },
  button: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
});
