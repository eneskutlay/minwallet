import React from "react";
import { View, Text } from "react-native";
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
  console.log(dataLoaded);

  return (
    <View>
      {dataLoaded ? (
        <View>
          {Object.keys(detailsData()).map((key) => (
            <View key={key}>
              <Text>
                {key}: {detailsData()[key]}
              </Text>
            </View>
          ))}
        </View>
      ) : (
        <Text>Data is loading...</Text>
      )}
    </View>
  );
};

export default UserDetailsBySlug;
