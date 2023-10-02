import React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { PrimaryInput } from "../components/TextFields";
import { PrimaryButton } from "../components/Buttons";

export default function SignDataForm() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.form}
        keyboardVerticalOffset={160}
        behavior={"position"}
      >
        <ScrollView style={styles.formView}>
          <PrimaryInput placeholder="Name" />
          <PrimaryInput placeholder="Language" />
          <PrimaryInput placeholder="Currency" />
          <PrimaryInput placeholder="Monthly income" />
          <PrimaryInput placeholder="Monthly expense" />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.button}>
        <PrimaryButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    gap: 10,
  },
  form: {
    width: "100%",
    height: "auto",
  },
  formView: {
    width: "100%",
    height: "auto",
  },
  button: {
    width: "100%",
    alignItems: "center",
    height: "auto",
  },
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

export { SignDataForm };
