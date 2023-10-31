import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Income() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Income Page</Text>
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text style={styles.button}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
