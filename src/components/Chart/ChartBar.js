import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let ChartHeight = "0%";

  if (props.maxValue > 0) {
    ChartHeight = `${Math.round((props.value / props.maxValue) * 100)}px`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: ChartHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
