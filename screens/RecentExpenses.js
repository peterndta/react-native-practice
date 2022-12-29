import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const context = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpense() {
      setIsFetching(true); // set Load
      try {
        const expenses = await fetchExpenses();
        context.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    }

    getExpense();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = context.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered 7 days!"
    />
  );
};

export default RecentExpenses;
