import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { VictoryPie } from "victory-native";
import useUserDataLogic from "../../src/lib/logic/UserDataLogic";

export default function Recap() {
  const { userData } = useUserDataLogic();
  const router = useRouter();
  const goToHome = () => {
    router.push("/home");
  };
  const data = [
    { x: "Income", y: userData.monthlyIncome },
    { x: "Expense", y: userData.monthlyExpense },
    { x: "Saving", y: userData.monthlySavings },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.chartSection}>
        <VictoryPie
          style={styles.pieStyle}
          data={data}
          innerRadius={100}
          padding={{ top: 10, bottom: 60, left: 60, right: 60 }}
          colorScale={["tomato", "orange", "gold"]}
          width={360}
        />
      </View>

      <View style={styles.contentSection}>
        <Text onPress={goToHome}>Go to Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    width: "100%",
    height: "auto",
    backgroundColor: "#1C1C1E",
  },
  chartSection: {
    flex: 1,
    width: "100%",
    height: "50%",
    alignItems: "center",
    //justifyContent: "center",
    paddingTop: 8,
  },
  pieStyle: {
    labels: {
      fill: "white",
      fontSize: 10,
      fontWeight: "bold",
    },
  },
  contentSection: {
    flex: 1,
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
