import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C2C2E",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
