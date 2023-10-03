import React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { PrimaryInput, DropDownDefault } from "../components/TextFields";
import { PrimaryButton } from "../components/Buttons";
import { useRouter } from "expo-router";

export default function SignDataForm() {
  const router = useRouter();
  const pressHandler = (path) => {
    router.push(path);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.form}
        keyboardVerticalOffset={160}
        behavior={"position"}
      >
        <ScrollView style={styles.formView}>
          <PrimaryInput placeholder="Name" />
          <DropDownDefault title="Language" optionOne="EN" optionTwo="TR"/>
          <PrimaryInput placeholder="Currency" value={{ }} />
          <PrimaryInput placeholder="Monthly income" />
          <PrimaryInput placeholder="Monthly expense" />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.button}>
        <PrimaryButton title="Go" onPress={() => pressHandler("/home")} />
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
