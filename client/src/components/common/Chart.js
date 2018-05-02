import React from "react";
import { Pie as PieChart } from "react-chartjs";
const chartData = [
  {
    value: 300,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Red"
  },
  {
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
  },
  {
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
  }
];

const chartOptions = { animateScale: true };

const Chart = () => {
  return (
    <PieChart
      data={chartData}
      options={chartOptions}
      width="600"
      height="250"
    />
  );
};

export { Chart };
