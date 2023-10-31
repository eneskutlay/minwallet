import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#2C2C2E",
    borderRadius: 16,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});
