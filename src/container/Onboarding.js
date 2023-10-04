import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import OnboardingItem from "../components/OnboardingItem";
import formData from "../lib/data/formData";
import { useOnboardingLogic } from "../lib/logic/OnboardingLogic";

export default function Onboarding() {
  const { currentIndex, scrollX, flatListRef, handleNext, handleBack } =
    useOnboardingLogic(formData);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={formData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
      />

      <TouchableOpacity
        style={[styles.button, styles.buttonBack]}
        onPress={handleBack}
        disabled={currentIndex === 0}
      >
        <Text style={styles.buttonText}>Geri</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonNext]}
        onPress={handleNext}
        disabled={currentIndex === formData.length - 1}
      >
        <Text style={styles.buttonText}>İleri</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  button: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: 20,
  },
  buttonBack: {
    left: 20,
    backgroundColor: "#545454",
  },
  buttonNext: {
    right: 20,
    backgroundColor: "#545454",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});
