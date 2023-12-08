import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { saveData, getData, getAllData } from "../lib/storage";

const ManageDetails = ({ category }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal görünürlüğü
  const [selectedSubcategory, setSelectedSubcategory] = useState(""); // Seçilen alt kategori
  const [value, setValue] = useState(""); // Girilen değer

  const subcategories = ["monthlyIncomeSalary", "monthlyIncomeRent", "monthlyIncomeInvestment", "monthlyIncomeOther"]; // Gelir alt kategorileri

  const handleSave = async () => {
    if (selectedSubcategory && value) {
      try {
        await saveData(selectedSubcategory, value); // Seçilen alt kategoriye göre değeri sakla
        setValue(""); // Değeri temizle
        setSelectedSubcategory(""); // Seçimi temizle
        const allData = await getAllData(); // Tüm verileri al
      } catch (error) {
        console.error("Veri saklanırken bir hata oluştu:", error);
      }
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Text>Choose subcategory for {category}</Text>
        <Text>{selectedSubcategory || "Select Subcategory"}</Text>
      </TouchableOpacity>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder={`Enter value for ${selectedSubcategory}`}
      />
      <TouchableOpacity onPress={handleSave}>
        <Text>Save</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide">
        <View>
          <FlatList
            data={subcategories}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedSubcategory(item);
                  setIsModalVisible(false);
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ManageDetails;
