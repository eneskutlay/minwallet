import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Alert } from "react-native";
import { clearAllData, updateBasicUserData } from "../lib/storage";
import { useRouter } from "expo-router";
import useUserDataLogic from "../lib/logic/UserDataLogic";
import { Hint } from "./Texts";

const UserDataSettings = ({ onEdit }) => {
  const { userData } = useUserDataLogic();
  const { userName, monthlyIncome, monthlyExpense, monthlySavings } = userData;
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });
  const router = useRouter();

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

  const handleDeleteAllData = () => {
    const handleDeleteAllDataOnPress = async () => {
      await clearAllData();
      router.push("onboarding");
    };
    Alert.alert(
      "Uyarı",
      "Tüm verileri silmek üzeresiniz. Devam etmek istiyor musunuz?",
      [
        {
          text: "İptal",
          onPress: () => handleCancel(),
          style: "cancel",
        },
        {
          text: "Devam Et",
          onPress: () => handleDeleteAllDataOnPress(),
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
          <View style={styles.editButtons}>
            <Button title="Edit" onPress={handleEditStart} />
          </View>
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
          <View style={styles.editButtons}>
            <Button title="Cancel" onPress={handleCancel} />
            <Button
              color="#E75D42"
              title="Delete All Data"
              onPress={handleDeleteAllData}
            />
            <Button title="Save" onPress={handleSave} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  UserDataComponent: {
    marginVertical: 16,
  },
  input: {
    overflow: "hidden",
    fontSize: Platform.OS === "ios" ? 14 : 15,
    backgroundColor: "#303030",
    color: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  editButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default UserDataSettings;
