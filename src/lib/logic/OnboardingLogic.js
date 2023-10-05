import React, { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";

export function useOnboardingLogic(formData, saveData) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const inputRefs = formData.map(() => React.createRef());

  const focusInput = (index) => {
    if (inputRefs[index] && inputRefs[index].current) {
      inputRefs[index].current.focus();
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < formData.length) {
      flatListRef.current.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
      setCurrentIndex(currentIndex - 1);
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
    handleBack,
  };
}
