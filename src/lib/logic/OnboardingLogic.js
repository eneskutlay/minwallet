import React, { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useRouter } from "expo-router";
import { saveData } from "../storage";
import { getLocales } from "expo-localization";

export function useOnboardingLogic(formData) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const inputRefs = formData.map(() => useRef(null));
  const [text, setText] = useState("");
  const currentLocale = getLocales()[0].languageCode;

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const focusInput = (index) => {
    if (inputRefs[index] && inputRefs[index].current) {
      inputRefs[index].current.focus();
    }
  };

  const handleNext = () => {
    // save data and go to next screen
    saveData(formData[currentIndex].placeholder[currentLocale], text);
    if (currentIndex < formData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      focusInput(currentIndex + 1);
    } else {
      router.push("/home");
    }
  };
  useEffect(() => {
    const viewableItemsChanged = ({ viewableItems }) => {
      setCurrentIndex(viewableItems[0].index);
    };

    const viewConfig = { viewAreaCoveragePercentThreshold: 50 };

    flatListRef.current.scrollToIndex({ index: currentIndex });

    return () => {
      // Event listenerları temizleme burada yapılabilir
    };
  }, [currentIndex]);

  return {
    currentIndex,
    scrollX,
    flatListRef,
    handleNext,
    handleTextChange,
  };
}
