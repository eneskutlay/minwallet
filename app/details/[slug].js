import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";

export default function DetailsPage() {
  const { slug } = useLocalSearchParams();
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>{slug}</Text>
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
