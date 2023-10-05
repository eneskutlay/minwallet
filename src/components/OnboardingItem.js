import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { OnboardingInput } from "./TextFields";
import { Title } from "./Texts";

export default function OnboardingItem({ item, onSubmitEditing }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.content}>
        <Title>{item.title}</Title>
        <OnboardingInput
          placeholder={item.placeholder}
          keyboardType={item.keyboardType}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
  },
  content: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});
