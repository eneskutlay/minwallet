import React, { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useRouter } from "expo-router";
import { saveData } from "../storage";

export function useOnboardingLogic(formData) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleNext = async () => {
    await saveData(formData[currentIndex].key, text);
    if (currentIndex < formData.length - 1) {
      setCurrentIndex(currentIndex + 1);
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
