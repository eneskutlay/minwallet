import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import useUserDataLogic from "../lib/logic/UserDataLogic";

export default function Details() {
  const { userData } = useUserDataLogic();
  const userIncomeData = userData.monthlyIncome;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{userIncomeData}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
