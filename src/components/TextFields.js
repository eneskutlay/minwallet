import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Platform,
  Keyboard,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

const PrimaryInput = ({ placeholder, value, onChangeText }) => (
  <TextInput
    style={styles.PrimaryInput}
    placeholder={placeholder}
    placeholderTextColor="#E7E7E7"
    value={value}
    onChangeText={onChangeText}
    keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
    returnKeyType="done"
    onSubmitEditing={Keyboard.dismiss}
    //fontsize?
  />
);

const DropDownDefault = ({ title, optionOne, optionTwo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={toggleDropdown}
    >
      <Text style={styles.selectedOption}>{selectedOption}</Text>
      {isOpen && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => handleOptionSelect("EN")}>
            <Text style={styles.option}>{optionOne}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect("TR")}>
            <Text style={styles.option}>{optionTwo}</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  PrimaryInput: {
    width: "100%",
    height: 40,
    borderColor: "#545454",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 9.63,
    fontSize: 18,
    color: "#FFFFFF",
    opacity: 0.8,
    backgroundColor: "#545454",
  },
  container: {
    width: "100%",
    height: 40,
    borderColor: "#545454",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 9.63,
    fontSize: 18,
    color: "#FFFFFF",
    opacity: 0.8,
    backgroundColor: "#545454",
    zIndex: 1,
  },
  selectedOption: {
    width: "100%",
    height: 40,
    fontSize: 18,
    color: "#FFFFFF",
    opacity: 0.8,
    paddingVertical: 6,
  },
  optionsContainer: {
    backgroundColor: "#545454",
    width: "100%",
    height: 80,
    borderColor: "#545454",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 9.63,
    fontSize: 18,
    color: "#FFFFFF",
    opacity: 0.8,
    backgroundColor: "#545454",
  },
  option: {
    width: "100%",
    height: 40,
    fontSize: 18,
    color: "#FFFFFF",
    opacity: 0.8,
    paddingVertical: 6,
  },
});

export { PrimaryInput, DropDownDefault };
