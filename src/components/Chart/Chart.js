import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let monthsValue = props.dataPoints.map((dataPoints) => dataPoints.value);
  let theMaxMonthvalue = Math.max(...monthsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={theMaxMonthvalue}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
