import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";
import { getHistoricalData } from "../../api/index";
import styles from "./LineGraph.module.css";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,

  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          parser: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildLineChart = (data, caseTypes = "cases") => {
  const chartData = [];
  let lastDataPoint;
  for (let date in data[caseTypes]) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[caseTypes][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[caseTypes][date];
  }
  return chartData;
};

const LineGraph = ({ caseTypes }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchHistoricalData = async () => {
      const chartData = buildLineChart(await getHistoricalData(), caseTypes);
      setData(chartData);
    };
    fetchHistoricalData();
  }, [caseTypes]);

  return (
    <div className={styles.graphContainer}>
      <Typography variant="h6"> Worldwide New {caseTypes}</Typography>

      {data.length > 0 ? (
        <Line
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204,16,52,0.5)",
                borderColor: "#cc1034",
                data: data,
              },
            ],
          }}
        ></Line>
      ) : (
        "null"
      )}
    </div>
  );
};

export default LineGraph;
