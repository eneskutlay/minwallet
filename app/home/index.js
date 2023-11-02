import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  SafeAreaView,
} from "react-native";
import { getLocales } from "expo-localization";
import { Title } from "../../src/components/Texts";
import { clearAllData } from "../../src/lib/storage";
import translations from "../../src/lib/lang/translations.json";
import useUserDataLogic from "../../src/lib/logic/UserDataLogic";
import Card from "../../src/components/Card";
import RecapCard from "../../src/components/RecapCard";

export default function Home() {
  const { userData } = useUserDataLogic();
  const currentLocale = getLocales()[0].languageCode;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Title>
          {translations[currentLocale].home.welcome} {userData.userName}
        </Title>
      </View>
      <ScrollView style={styles.scrollBody}>
        <View style={styles.body}>
          <Card
            tag="income"
            title={
              translations[currentLocale].home.monthlyIncome +
              " " +
              userData.monthlyIncome
            }
            description="Est dolore enim ex culpa laborum pariatur officia labore"
            assetImage={require("../../assets/bag.png")}
          />
          <Card
            tag="expense"
            title={
              translations[currentLocale].home.monthlyExpense +
              " " +
              userData.monthlyExpense
            }
            description="Est dolore enim ex culpa laborum pariatur officia labore"
            assetImage={
              currentLocale === "en"
                ? require("../../assets/expense.png")
                : require("../../assets/expense-tr.png")
            }
          />
          <Card
            tag="savings"
            title={
              translations[currentLocale].home.monthlySavings +
              " " +
              userData.monthlySavings
            }
            description="Est dolore enim ex culpa laborum pariatur officia labore"
            assetImage={require("../../assets/saving.png")}
          />
          <RecapCard
            tag="recap"
            title="Recap"
            description="Recap for your overall report and financial freedom analysis"
            assetImage={require("../../assets/saving.png")}
          />
        </View>
      </ScrollView>
      <Button title="Clear All Data" onPress={clearAllData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#1C1C1E",
  },
  header: {
    width: "100%",
    alignItems: "center",
    height: "auto",
    paddingTop: 24,
    zIndex: 1,
  },
  scrollBody: {
    flex: 0,
    width: "100%",
    height: "auto",
  },
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    height: "auto",
    gap: 24,
    paddingVertical: 16,
  },
});
