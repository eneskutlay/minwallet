import React from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";
import { getLocales } from "expo-localization";
import { Title } from "../../src/components/Texts";
import { clearAllData } from "../../src/lib/storage";
import translations from "../../src/lib/lang/translations.json";
import useUserDataLogic from "../../src/lib/logic/UserDataLogic";
import Card from "../../src/components/Card";
import { useRouter } from "expo-router";

export default function Home() {
  const { userData } = useUserDataLogic();
  const currentLocale = getLocales()[0].languageCode;
  const router = useRouter();
  const goToRecap = () => {
    router.push("/recap");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title>
          {translations[currentLocale].home.welcome} {userData.userName}
        </Title>
      </View>
      <ScrollView style={styles.scrollBody}>
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
      </ScrollView>
      <View style={styles.footer}>
        <Button title="Clear All Data" onPress={clearAllData} />
        <Button title="Go to Recap" onPress={goToRecap} />
      </View>
    </View>
  );
}

// some styles problem here but where?
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
    padding: 4,
    zIndex: 1,
  },
  scrollBody: {
    flex: 12,
    width: "100%",
    height: "auto",
  },
  body: {
    flex: 12,
    width: "100%",
    alignItems: "center",
    height: "auto",
    gap: 24,
    paddingVertical: 16,
  },
  footer: {
    width: "100%",
    alignItems: "center",
    height: "auto",
    padding: 4,
    zIndex: 1,
    flexDirection: "row",
  },
});
