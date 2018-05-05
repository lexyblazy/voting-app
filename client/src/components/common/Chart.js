import React from "react";
import { Doughnut as PieChart } from "react-chartjs";

const chartOptions = { animateScale: true };

const Chart = ({ chartData }) => {
  return (
    <div className="row">
      <div className="col s12">
        <PieChart
          data={chartData}
          options={chartOptions}
          width="600"
          height="350"
          redraw
        />
      </div>
      <div className="col s12">
        <ul className="collection">
          {chartData.map(d => {
            return (
              <li key={d.label} className="collection-item valign-wrapper">
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
                <div>
                  {d.label} - {d.value} Votes
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { Chart };
