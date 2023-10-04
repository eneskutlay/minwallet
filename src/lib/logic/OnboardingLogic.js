import { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";

export function useOnboardingLogic(formData) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const flatListRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < formData.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
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
      // Burada event listenerları temizleyebilirsiniz
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
