import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { getLocales } from "expo-localization";
import { useFocusEffect } from "expo-router";
import translations from "../../src/lib/lang/translations.json";
import useUserDataLogic from "../../src/lib/logic/UserDataLogic";
import Card from "../../src/components/Card";
import Header from "../../src/components/Header";

export default function Home() {
  const { userData } = useUserDataLogic();
  const currentLocale = getLocales()[0].languageCode;
  const currentTranslations = translations[currentLocale];
  const { monthlyIncome, monthlyExpense, monthlySavings } = userData;
  const [refreshKey, setRefreshKey] = useState(0);

  //If the page is rendered, all data is re-retrieved.
  useFocusEffect(
    React.useCallback(() => {
      setRefreshKey((prevKey) => prevKey + 1); // Sayfa odaklandığında refreshKey'i arttır
    }, [])
  );

  const data = [
    {
      tag: "income",
      title: `${currentTranslations.home.monthlyIncome} ${monthlyIncome}`,
      description: `${currentTranslations.details.income.description}`,
      assetImage: require("../../assets/bag.png"),
    },
    {
      tag: "expense",
      title: `${currentTranslations.home.monthlyExpense} ${monthlyExpense}`,
      description: `${currentTranslations.details.expense.description}`,
      assetImage:
        currentLocale === "en"
          ? require("../../assets/expense.png")
          : require("../../assets/expense-tr.png"),
    },
    {
      tag: "savings",
      title: `${currentTranslations.home.monthlySavings} ${monthlySavings}`,
      description: `${currentTranslations.details.savings.description}`,
      assetImage: require("../../assets/saving.png"),
    },
    {
      tag: "recap",
      title: "Recap",
      description: `${currentTranslations.details.recap.description}`,
      assetImage: require("../../assets/saving.png"), //change this image
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
        key={refreshKey}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.tag}
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
      />
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
});
