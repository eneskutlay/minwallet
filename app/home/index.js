import React from "react";
import { StyleSheet, View, ActivityIndicator, ScrollView } from "react-native";
import { getLocales } from "expo-localization";
import PrimaryButton from "../../src/components/Buttons";
import { Title } from "../../src/components/Texts";
import { clearAllData } from "../../src/lib/storage";
import translations from "../../src/lib/lang/translations.json";
import useUserDataLogic from "../../src/lib/logic/UserDataLogic";
import Card from "../../src/components/Card";
import { VictoryPie } from "victory-native";


// create a function for title and description
export default function Home() {
  const { userData } = useUserDataLogic();
  const currentLocale = getLocales()[0].languageCode;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title>
          {translations[currentLocale].home.welcome} {userData.userName}
        </Title>
      </View>
      <View style={styles.body}>
        <Card
          title={
            translations[currentLocale].home.monthlyIncome +
            " " +
            userData.monthlyIncome
          }
          description="Est dolore enim ex culpa laborum pariatur officia labore"
          assetImage={require("../../assets/bag.png")}
        />
        <Card
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
          title={
            translations[currentLocale].home.monthlySaving +
            " " +
            userData.monthlySavings
          }
          description="Est dolore enim ex culpa laborum pariatur officia labore"
          assetImage={require("../../assets/saving.png")}
        />
      </View>
      <View style={styles.footer}>
        <PrimaryButton title="Tüm verileri sil" onPress={clearAllData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginVertical: 16,
  },
  header: {
    width: "100%",
    alignItems: "center",
    height: "auto",
    padding: 16,
    zIndex: 1,
  },
  body: {
    flex: 12,
    width: "100%",
    alignItems: "center",
    height: "auto",
    gap: 24,
  },
  footer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    height: "auto",
  },
  chart: {
    labels: {
      fill: "white",
    },
  },
});
