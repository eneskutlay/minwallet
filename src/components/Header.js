import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Title } from "./Texts";
import { useRouter } from "expo-router";

export default function Header({ title, userName }) {
  const router = useRouter();

  const handleSettingsPress = () => router.push("settings");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.title}>
          {title} {userName}
        </Title>
      </View>
      <TouchableOpacity style={styles.settings} onPress={handleSettingsPress}>
        <Image
          source={require("../../assets/settings.png")}
          style={styles.settingsImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 16,
  },
  settings: {
    flex: 1,
    alignItems: "flex-end",
  },
  settingsImage: {
    width: 24,
    height: 24,
  },
});
