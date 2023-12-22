import React from "react";
import { StyleSheet, View, Button, SafeAreaView } from "react-native";
import { getAllData } from "../../src/lib/storage";
import { useRouter } from "expo-router";
import { Title } from "../../src/components/Texts";
import EditableUserData from "../../src/components/EditableUserData";

export default function Settings() {
  const router = useRouter();

  const handleEdit = () => {
    // Handle any actions after data editing
    // You can add logic here if needed after editing the data
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDataContainer}>
        <Title>Settings</Title>
        <EditableUserData onEdit={handleEdit} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Go to Home" onPress={() => router.push("home")} />
        <Button title="Get All Data" onPress={getAllData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  userDataContainer: {
    flex: 4,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  buttonsContainer: {
    flex: 0.3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    bottom: 0,
  },
});
