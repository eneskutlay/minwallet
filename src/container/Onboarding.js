import React from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";
import OnboardingItem from "../components/OnboardingItem";
import formData from "../lib/staticData/formData";
import { useOnboardingLogic } from "../lib/logic/OnboardingLogic";
import { getLocales } from "expo-localization";

export default function Onboarding() {
  const currentLocale = getLocales()[0].languageCode;
  const { scrollX, flatListRef, handleTextChange, handleNext } =
    useOnboardingLogic(formData);
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
            onChangeText={handleTextChange}
            onSubmitEditing={handleNext}
            currentLocale={currentLocale}
            text={formData[index].text}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
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
