import React, { useState, useEffect } from "react";
import { getData } from "../storage";

const useUserDetailsLogic = () => {
  const [userMonthlyIncomeDetails, setUserMonthlyIncomeDetails] = useState({});
  const [userMonthlyExpenseDetails, setUserMonthlyExpenseDetails] = useState(
    {}
  );
  const [userMonthlySavingsDetails, setUserMonthlySavingsDetails] = useState(
    {}
  );
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const monthlyIncomeSalary = await getData("MonthlyIncomeSalary");
        const monthlyIncomeRent = await getData("MonthlyIncomeRent");
        const monthlyIncomeInvestment = await getData(
          "MonthlyIncomeInvestment"
        );
        const monthlyIncomeOther = await getData("MonthlyIncomeOther");

        const monthlyExpenseBasic = await getData("MonthlyExpenseBasic");
        const monthlyExpensePersonal = await getData("MonthlyExpensePersonal");
        const monthlyExpenseFinancial = await getData(
          "MonthlyExpenseFinancial"
        );
        const monthlyExpenseOther = await getData("MonthlyExpenseOther");

        const monthlySavingsEmergency = await getData(
          "MonthlySavingsEmergency"
        );
        const monthlySavingsRetirement = await getData(
          "MonthlySavingsRetirement"
        );
        const monthlySavingsInvestment = await getData(
          "MonthlySavingsInvestment"
        );
        const monthlySavingsOther = await getData("MonthlySavingsOther");

        if (
          monthlyIncomeSalary != null &&
          monthlyIncomeRent != null &&
          monthlyIncomeInvestment != null &&
          monthlyIncomeOther != null &&
          monthlyExpenseBasic != null &&
          monthlyExpensePersonal != null &&
          monthlyExpenseFinancial != null &&
          monthlyExpenseOther != null &&
          monthlySavingsEmergency != null &&
          monthlySavingsRetirement != null &&
          monthlySavingsInvestment != null &&
          monthlySavingsOther != null
        ) {
          setUserMonthlyIncomeDetails({
            monthlyIncomeSalary,
            monthlyIncomeRent,
            monthlyIncomeInvestment,
            monthlyIncomeOther,
          });

          setUserMonthlyExpenseDetails({
            monthlyExpenseBasic,
            monthlyExpensePersonal,
            monthlyExpenseFinancial,
            monthlyExpenseOther,
          });

          setUserMonthlySavingsDetails({
            monthlySavingsEmergency,
            monthlySavingsRetirement,
            monthlySavingsInvestment,
            monthlySavingsOther,
          });

          setDataLoaded(true);
        }
      } catch (error) {
        console.error("getData error:", error);
      }
    };

    fetchData();
  }, []);

  return {
    userMonthlyIncomeDetails,
    userMonthlyExpenseDetails,
    userMonthlySavingsDetails,
    dataLoaded,
  };
};

export default useUserDetailsLogic;
