import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Card({ title, description, assetImage }) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.imageAssets} source={assetImage} />
      </View>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.router}>
        <Image
          source={require("../../assets/arrow-right.png")}
          style={styles.imageAssets}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "92%",
    height: 116,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: "#2C2C2E",
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 8,
  },

  imageAssets: {
    width: 21,
    height: 19,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: "70%",
    height: "100%",
    paddingLeft: 16,
    gap: 8,
  },
  router: {
    width: "16%",
    height: "auto",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 8,
  },
  header: {
    width: "100%",
    height: "30%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9F9FA5",
  },
  content: {
    width: "100%",
    height: "70%",
  },
  description: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#FFFFFF",
  },
});
