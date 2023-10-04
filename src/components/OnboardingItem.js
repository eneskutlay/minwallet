import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { PrimaryInput } from "./TextFields";
import { Title } from "./Texts";

export default function OnboardingItem({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.content}>
        <Title>{item.text}</Title>
        <PrimaryInput placeholder={item.placeholder} />
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
