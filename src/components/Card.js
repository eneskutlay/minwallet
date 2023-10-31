import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Dimensions } from "react-native";

export default function Card({ title, description, assetImage, tag }) {
  const router = useRouter();

  const handleCardPress = () => {
    router.push("/" + tag);
  };
  const screenWidth = Dimensions.get("window").width; // Get the screen width

  // Determine the width based on the screen width
  // if phone is iphone 7 or smaller, card width is 350 px
  // if phone is iphone 8 or larger, card width is 408 px

  let cardWidth = screenWidth <= 375 ? 350 : 408;

  return (
    <TouchableOpacity
      style={{ ...styles.container, width: cardWidth }}
      onPress={handleCardPress}
    >
      <View style={styles.image}>
        <Image style={styles.imageAssets} source={assetImage} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.router}>
        <Image
          source={require("../../assets/arrow-right.png")}
          style={styles.arrowImage}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    //width: 408,
    height: 108,
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
  arrowImage: {
    width: 8,
    height: 14,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
