import React from "react";
import { Doughnut as PieChart } from "react-chartjs";

const chartOptions = { animateScale: true };

const Chart = ({ chartData }) => {
  console.log(chartData);
  return (
    <div>
      <PieChart
        data={chartData}
        options={chartOptions}
        width="600"
        height="350"
      />
      <ul className="collection">
        {chartData.map(d => {
          console.log(d);
          return (
            <li key={d.label} className="collection-item valign-wrapper" >
              <div
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 10,
                  backgroundColor: d.color,
                  marginRight: 10
                }}
              /> 
              {"  "}
              <div>{d.label} - {d.value} Votes</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Chart };
