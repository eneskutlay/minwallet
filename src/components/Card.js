import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Card({}) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.imageAssets}
          source={require("../../assets/user.png")}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>Example Title</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.description}>
            Est dolore enim ex culpa laborum pariatur officia labore
          </Text>
        </View>
      </View>
      <View style={styles.router}>
        <Image source={require("../../assets/arrow-right.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    backgroundColor: "#2C2C2E",
    width: 343,
    height: 116,
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent: "center",
    gap: 6,
  },
  image: {
    width: 36,
    height: 36,
    backgroundColor: "#1C1C1E",
    borderRadius: 6,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  imageAssets: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
  },
  body: {
    width: "70%",
    height: "100%",
    paddingLeft: 16,
  },
  router: {
    width: "20%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 8,
  },
  header: {
    width: "100%",
    height: "40%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9F9FA5",
  },
  description: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#FFFFFF",
  },
});
