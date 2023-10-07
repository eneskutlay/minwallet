import React, { useState } from "react";
import { StyleSheet, TextInput, Platform, Keyboard, Alert } from "react-native";
import { saveData } from "../lib/storage";

export function PrimaryInput({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#E7E7E7"
      value={value}
      onChangeText={onChangeText}
      keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
      returnKeyType="next"
      onSubmitEditing={Keyboard.dismiss}
    />
  );
}

export function OnboardingInput({
  placeholder,
  keyboardType,
  onSubmitEditing,
  onChangeText,
  text,
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#E7E7E7"
      value={text}
      onChangeText={onChangeText}
      keyboardType={keyboardType || "default"}
      returnKeyType={Platform.OS === "ios" ? "done" : "next"}
      onSubmitEditing={onSubmitEditing}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    borderColor: "#545454",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 9.63,
    fontSize: 18,
    color: "#FFFFFF",
    opacity: 0.8,
    backgroundColor: "#545454",
  },
});
