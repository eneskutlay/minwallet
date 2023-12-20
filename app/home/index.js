import React from "react";
import { StyleSheet, View, Button, SafeAreaView, FlatList } from "react-native";
import { getLocales } from "expo-localization";
import { clearAllData, getAllData } from "../../src/lib/storage";
import translations from "../../src/lib/lang/translations.json";
import useUserDataLogic from "../../src/lib/logic/UserDataLogic";
import Card from "../../src/components/Card";
import Header from "../../src/components/Header";

export default function Home() {
  const { userData } = useUserDataLogic();
  const currentLocale = getLocales()[0].languageCode;
  const currentTranslations = translations[currentLocale];
  const { monthlyIncome, monthlyExpense, monthlySavings } = userData;

  const data = [
    {
      tag: "income",
      title: `${currentTranslations.home.monthlyIncome} ${monthlyIncome}`,
      description: "Est dolore enim ex culpa laborum pariatur officia labore",
      assetImage: require("../../assets/bag.png"),
    },
    {
      tag: "expense",
      title: `${currentTranslations.home.monthlyExpense} ${monthlyExpense}`,
      description: "Est dolore enim ex culpa laborum pariatur officia labore",
      assetImage:
        currentLocale === "en"
          ? require("../../assets/expense.png")
          : require("../../assets/expense-tr.png"),
    },
    {
      tag: "savings",
      title: `${currentTranslations.home.monthlySavings} ${monthlySavings}`,
      description: "Est dolore enim ex culpa laborum pariatur officia labore",
      assetImage: require("../../assets/saving.png"),
    },
    {
      tag: "recap",
      title: "Recap",
      description:
        "Recap for your overall report and financial freedom analysis",
      assetImage: require("../../assets/saving.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <Card
      tag={item.tag}
      title={item.title}
      description={item.description}
      assetImage={item.assetImage}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={currentTranslations.home.welcome}
        userName={userData.userName}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.tag}
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
      />
      <View style={styles.buttonsContainer}>
        <Button title="Clear All Data" onPress={clearAllData} />
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
  body: {
    alignItems: "center",
    paddingVertical: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
