import React, { useState } from "react";
import { StyleSheet, TextInput, Platform, Keyboard } from "react-native";
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

export function OnboardingInput({ placeholder, value, onChangeText }) {
  const [text, setText] = useState(""); // Kullanıcının girdiği veriyi saklamak için state

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleInputBlur = () => {
    // Kullanıcı veriyi girdikten sonra burada saklayabilirsiniz
    saveData(placeholder, text);
    Keyboard.dismiss();
  };
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#E7E7E7"
      value={text}
      onChangeText={handleTextChange}
      onBlur={handleInputBlur}
      keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
      returnKeyType="done"
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
