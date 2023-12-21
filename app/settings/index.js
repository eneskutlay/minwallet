import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, Alert } from "react-native";
import {
  clearAllData,
  getAllData,
  updateBasicUserData,
} from "../../src/lib/storage";
import { useRouter } from "expo-router";
import useUserDataLogic from "../../src/lib/logic/UserDataLogic";
import { Hint } from "../../src/components/Texts";

const UserDataSettings = ({ onEdit }) => {
  const { userData } = useUserDataLogic();
  const { userName, monthlyIncome, monthlyExpense, monthlySavings } = userData;
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });

  const handleCancel = () => {
    setEditedData({ ...userData });
    setEditing(false);
  };

  const handleSave = async () => {
    await updateBasicUserData(editedData);
    setEditing(false);
    onEdit();
  };

  const handleEditStart = () => {
    Alert.alert(
      "Uyarı",
      "Verileri düzenlemek üzeresiniz. Devam etmek istiyor musunuz?",
      [
        {
          text: "İptal",
          onPress: () => console.log("Düzenleme iptal edildi"),
          style: "cancel",
        },
        {
          text: "Devam Et",
          onPress: () => setEditing(true),
        },
      ]
    );
  };

  return (
    <View style={styles.UserDataComponent}>
      {!editing ? (
        <View>
          <Hint>
            Username: {editedData.userName ? editedData.userName : userName}
          </Hint>
          <Hint>
            Monthly Income:{" "}
            {editedData.monthlyIncome
              ? editedData.monthlyIncome
              : monthlyIncome}
          </Hint>
          <Hint>
            Monthly Expense:{" "}
            {editedData.monthlyExpense
              ? editedData.monthlyExpense
              : monthlyExpense}
          </Hint>
          <Hint>
            Monthly Savings:{" "}
            {editedData.monthlySavings
              ? editedData.monthlySavings
              : monthlySavings}
          </Hint>
          <Button title="Edit" onPress={handleEditStart} />
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.input}
            value={editedData.userName}
            onChangeText={(text) =>
              setEditedData({ ...editedData, userName: text })
            }
            placeholder="Enter userName"
          />
          <TextInput
            style={styles.input}
            value={editedData.monthlyIncome}
            onChangeText={(text) =>
              setEditedData({ ...editedData, monthlyIncome: text })
            }
            placeholder="Enter monthly income"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={editedData.monthlyExpense}
            onChangeText={(text) =>
              setEditedData({ ...editedData, monthlyExpense: text })
            }
            placeholder="Enter monthly expense"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={editedData.monthlySavings}
            onChangeText={(text) =>
              setEditedData({ ...editedData, monthlySavings: text })
            }
            placeholder="Enter monthly savings"
            keyboardType="numeric"
          />
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={handleCancel} />
        </View>
      )}
    </View>
  );
};

export default function Settings() {
  const router = useRouter();

  const handleEdit = () => {
    // Handle any actions after data editing
    // You can add logic here if needed after editing the data
  };

  return (
    <View style={styles.container}>
      <View style={styles.userDataContainer}>
        <UserDataSettings onEdit={handleEdit} />
        <Button title="Go to Home" onPress={() => router.push("home")} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Clear All Data" onPress={clearAllData} />
        <Button title="Get All Data" onPress={getAllData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#1C1C1E",
    justifyContent: "space-between",
  },
  userDataContainer: {
    flex: 1,
    justifyContent: "center",
  },
  UserDataComponent: {
    marginBottom: 20,
  },
  buttonsContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});
