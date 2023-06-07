import React from "react";
import Chart from "./Chart";
import "./Chart.css";

const ExpensesChart = (props) => {
  let dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (let expense of props.expenses) {
    let theMonth = expense.date.getMonth();
    dataPoints[theMonth].value += expense.amount;
  }
  return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;
