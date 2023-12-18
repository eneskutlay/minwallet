import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useUserDetailsLogic from "../lib/logic/UserDetailsLogic";

const UserDetailsBySlug = ({ slug }) => {
  const {
    userMonthlyIncomeDetails,
    userMonthlyExpenseDetails,
    userMonthlySavingsDetails,
    dataLoaded,
  } = useUserDetailsLogic();

  const detailsData = () => {
    if (slug === "income") {
      return userMonthlyIncomeDetails;
    } else if (slug === "expense") {
      return userMonthlyExpenseDetails;
    } else if (slug === "savings") {
      return userMonthlySavingsDetails;
    }
    return {};
  };

  return (
    <View style={styles.container}>
      {dataLoaded ? (
        Object.keys(detailsData()).map((key, index) => (
          <Text key={index} style={styles.detailsListText}>
            {key}: {detailsData()[key]}
          </Text>
        ))
      ) : (
        <Text style={styles.detailsListText}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  detailsListText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#FFF",
    marginVertical: 5,
  },
});

export default UserDetailsBySlug;
