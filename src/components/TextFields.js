//import React, { useState } from "react";
import { StyleSheet, TextInput, Platform, Keyboard } from "react-native";
//import { SelectList } from "react-native-dropdown-select-list";

const PrimaryInput = ({ placeholder, value, onChangeText }) => (
  <TextInput
    style={styles.PrimaryInput}
    placeholder={placeholder}
    placeholderTextColor="#E7E7E7"
    value={value}
    onChangeText={onChangeText}
    keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
    returnKeyType="done"
    onSubmitEditing={Keyboard.dismiss}
    //fontsize?
  />
);

const styles = StyleSheet.create({
  PrimaryInput: {
    width: "100%",
    height: 40,
    borderColor: "#545454",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 9.63,
    fontSize: 18,
    color: "#1C1C1E",
    opacity: 0.8,
    backgroundColor: "#545454",
  },
});

export { PrimaryInput };
