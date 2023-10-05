import React from "react";
import { StyleSheet, View, FlatList, Animated } from "react-native";
import OnboardingItem from "../components/OnboardingItem";
import formData from "../lib/data/formData";
import { useOnboardingLogic } from "../lib/logic/OnboardingLogic";

export default function Onboarding() {
  const {
    currentIndex,
    scrollX,
    flatListRef,
    handleNext,
    handleBack,
    handleInputSubmit,
  } = useOnboardingLogic(formData);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={formData}
        renderItem={({ item, index }) => (
          <OnboardingItem
            item={item}
            index={index}
            totalItems={formData.length}
            onSubmitEditing={() => handleNext()}
          />
        )}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
