import React from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UIs/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from '../Chart/ExpensesChart'

const Expenses = (props) => {
  const [year, setYear] = React.useState("2022");

  function ExpensesFilterHandler(yearValue) {
    setYear(yearValue);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const theExpenses = filteredExpenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  const expensesContent = theExpenses.length ? (
    theExpenses
  ) : (
    <p className="no-expenses">No Expenses To Show</p>
  );

  return (
    <Card className="expenses">
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesFilter
        onExpensesFilterChange={ExpensesFilterHandler}
        selectedYear={year}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
