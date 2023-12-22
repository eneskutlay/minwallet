import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Alert } from "react-native";
import { useRouter } from "expo-router";
import { getLocales } from "expo-localization";
import { clearAllData, updateBasicUserData } from "../lib/storage";
import useUserDataLogic from "../lib/logic/UserDataLogic";
import translations from "../lib/lang/translations.json";
import { Hint } from "./Texts";

const UserDataSettings = ({ onEdit }) => {
  const { userData } = useUserDataLogic();
  const { userName, monthlyIncome, monthlyExpense, monthlySavings } = userData;
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });
  const router = useRouter();
  const currentLocale = getLocales()[0].languageCode;
  const currentTranslations = translations[currentLocale];

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
      `${currentTranslations.settings.alert}`,
      `${currentTranslations.settings.handleEditStart}`,
      [
        {
          text: `${currentTranslations.settings.cancel}`,
          onPress: () => console.log("Düzenleme iptal edildi"),
          style: "cancel",
        },
        {
          text: `${currentTranslations.settings.ok}`,
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
      `${currentTranslations.settings.alert}`,
      `${currentTranslations.settings.handleDeleteStart}`,
      [
        {
          text: `${currentTranslations.settings.cancel}`,
          onPress: () => handleCancel(),
          style: "cancel",
        },
        {
          text: `${currentTranslations.settings.ok}`,
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
            {currentTranslations.home.username}:{" "}
            {editedData.userName ? editedData.userName : userName}
          </Hint>
          <Hint>
            {currentTranslations.home.monthlyIncome}:{" "}
            {editedData.monthlyIncome
              ? editedData.monthlyIncome
              : monthlyIncome}
          </Hint>
          <Hint>
            {currentTranslations.home.monthlyExpense}:{" "}
            {editedData.monthlyExpense
              ? editedData.monthlyExpense
              : monthlyExpense}
          </Hint>
          <Hint>
            {currentTranslations.home.monthlySavings}:{" "}
            {editedData.monthlySavings
              ? editedData.monthlySavings
              : monthlySavings}
          </Hint>
          <View style={styles.editButtons}>
            <Button
              title={currentTranslations.placeholders.edit}
              onPress={handleEditStart}
            />
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
            placeholder={currentTranslations.placeholders.username}
          />
          <TextInput
            style={styles.input}
            value={editedData.monthlyIncome}
            onChangeText={(text) =>
              setEditedData({ ...editedData, monthlyIncome: text })
            }
            placeholder={currentTranslations.placeholders.monthlyIncome}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={editedData.monthlyExpense}
            onChangeText={(text) =>
              setEditedData({ ...editedData, monthlyExpense: text })
            }
            placeholder={currentTranslations.placeholders.monthlyExpense}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={editedData.monthlySavings}
            onChangeText={(text) =>
              setEditedData({ ...editedData, monthlySavings: text })
            }
            placeholder={currentTranslations.placeholders.monthlySavings}
            keyboardType="numeric"
          />
          <View style={styles.editButtons}>
            <Button
              title={currentTranslations.settings.cancel}
              onPress={handleCancel}
            />
            <Button
              color="#E75D42"
              title={currentTranslations.placeholders.deleteAllData}
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
