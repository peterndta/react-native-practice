import React, { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const context = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={context.expenses}
      expensesPeriod="Total"
      fallbackText="No expenses registered!"
    />
  );
};

export default AllExpenses;
