import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from "react-native";
import { saveData } from "../lib/storage";

const ManageDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [value, setValue] = useState("");
  const [showSubcategories, setShowSubcategories] = useState(false);
  const subcategories = [
    "MonthlyIncomeSalary",
    "MonthlyIncomeRent",
    "MonthlyIncomeInvestment",
    "MonthlyIncomeOther",
  ];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setShowSubcategories(false);
  };

  const handleSave = async () => {
    if (selectedSubcategory && value) {
      try {
        await saveData(selectedSubcategory, value);
        setValue("");
        setSelectedSubcategory("");
        toggleModal();
      } catch (error) {
        console.error("Veri saklanırken bir hata oluştu:", error);
      }
    }
  };

  const handleDropdownClick = () => {
    setShowSubcategories(!showSubcategories);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDropdownClick}
            style={styles.dropdown}
          >
            <Text style={styles.dropdownText}>
              {selectedSubcategory ? selectedSubcategory : "Select Subcategory"}
            </Text>
          </TouchableOpacity>
          {showSubcategories && (
            <View style={styles.subcategoryList}>
              {subcategories.map((subcategory, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedSubcategory(subcategory);
                    setShowSubcategories(false);
                  }}
                  style={styles.subcategoryItem}
                >
                  <Text>{subcategory}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {selectedSubcategory !== "" && (
            <>
              <Text>Enter value for {selectedSubcategory}</Text>
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={(text) => setValue(text)}
                placeholder="Enter value"
                keyboardType="numeric"
              />
              <TouchableOpacity onPress={handleSave}>
                <Text style={styles.saveButton}>Save</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "blue",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 30,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
    color: "blue",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: 200,
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
  },
  dropdownText: {
    color: "#000",
  },
  subcategoryList: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: 200,
  },
  subcategoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: 200,
    marginBottom: 10,
    padding: 10,
  },
  saveButton: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },
});

export default ManageDetails;


// todos
// Styling
// Refresh page after save
// Add delete functionality
// Add update functionality
// refactor
