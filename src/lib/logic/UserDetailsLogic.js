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
    // monthly income details keys are: salary, rent, investment, other
    // monthly expense details keys are: basic, personal, financial, other
    // monthly savings details keys are: emergency, retirement, investment, other

    const fetchData = async () => {
      const monthlyIncomeSalary = await getData("MonthlyIncomeSalary");
      const monthlyIncomeRent = await getData("MonthlyIncomeRent");
      const monthlyIncomeInvestment = await getData("MonthlyIncomeInvestment");
      const monthlyIncomeOther = await getData("MonthlyIncomeOther");

      const monthlyExpenseBasic = await getData("MonthlyExpenseBasic");
      const monthlyExpensePersonal = await getData("MonthlyExpensePersonal");
      const monthlyExpenseFinancial = await getData("MonthlyExpenseFinancial");
      const monthlyExpenseOther = await getData("MonthlyExpenseOther");

      const monthlySavingsEmergency = await getData("MonthlySavingsEmergency");
      const monthlySavingsRetirement = await getData(
        "MonthlySavingsRetirement"
      );
      const monthlySavingsInvestment = await getData(
        "MonthlySavingsInvestment"
      );
      const monthlySavingsOther = await getData("MonthlySavingsOther");

      if (
        monthlyIncomeSalary != null &&
        monthlyIncomeSalary !== "" &&
        monthlyIncomeRent != null &&
        monthlyIncomeRent !== "" &&
        monthlyIncomeInvestment != null &&
        monthlyIncomeInvestment !== "" &&
        monthlyIncomeOther != null &&
        monthlyIncomeOther !== "" &&
        monthlyExpenseBasic != null &&
        monthlyExpenseBasic !== "" &&
        monthlyExpensePersonal != null &&
        monthlyExpensePersonal !== "" &&
        monthlyExpenseFinancial != null &&
        monthlyExpenseFinancial !== "" &&
        monthlyExpenseOther != null &&
        monthlyExpenseOther !== "" &&
        monthlySavingsEmergency != null &&
        monthlySavingsEmergency !== "" &&
        monthlySavingsRetirement != null &&
        monthlySavingsRetirement !== "" &&
        monthlySavingsInvestment != null &&
        monthlySavingsInvestment !== "" &&
        monthlySavingsOther != null &&
        monthlySavingsOther !== ""
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
