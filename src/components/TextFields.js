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
}) {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    if (keyboardType === "numeric") {
      newText = newText.replace(/[^0-9]/g, "");
    }
    setText(newText);
  };

  const handleInputBlur = () => {
    saveData(placeholder, text);
    Keyboard.dismiss();
  };

  const handleOnSubmitEditing = () => {
    if (text.length > 0) {
      onSubmitEditing();
    } else {
      Alert.alert("Lütfen bir değer giriniz.");
    }
  };

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#E7E7E7"
      value={text}
      onChangeText={handleTextChange}
      onBlur={handleInputBlur}
      keyboardType={keyboardType || "default"}
      returnKeyType={Platform.OS === "ios" ? "done" : "next"}
      onSubmitEditing={handleOnSubmitEditing}
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
