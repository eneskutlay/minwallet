import React, { useState, useEffect } from "react";
import { getData } from "../storage";

const useUserDataLogic = () => {
  const [userData, setUserData] = useState(null); // Başlangıçta null olarak ayarlandı
  const [dataLoaded, setDataLoaded] = useState(false); // Veriler yüklendiğinde true olarak ayarlanır

  useEffect(() => {
    const fetchData = async () => {
      const userName = await getData("Username");
      const monthlyIncome = await getData("MonthlyIncome");
      const monthlyExpense = await getData("MonthlyExpense");
      const monthlySavings = await getData("MonthlySavings");

      if (
        userName != null &&
        userName !== "" &&
        monthlyIncome != null &&
        monthlyIncome !== "" &&
        monthlyExpense != null &&
        monthlyExpense !== "" &&
        monthlySavings != null &&
        monthlySavings !== ""
      ) {
        setUserData({
          userName,
          monthlyIncome,
          monthlyExpense,
          monthlySavings,
        });
        setDataLoaded(true); // Veriler yüklendiğinde bayrağı true yap
      }
    };

    fetchData();
  }, []);

  return { userData, dataLoaded }; // Hem verileri hem de bayrağı döndür
};

export default useUserDataLogic;
