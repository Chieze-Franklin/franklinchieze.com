import React from "react";

import { Line } from "react-chartjs-2";

export default function StatesLineGraph(props) {
  const { expanded, project } = props;

  const data = (canvas) => {
    let ctx = canvas.getContext("2d");
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      datasets: [
        {
          backgroundColor: gradientStroke,
          data: project.statesData,
          fill: true,
          label: "Project State",
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      point: {
        radius: 0,
      },
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 3,
            padding: 1,
            fontColor: "transparent", // "#9a9a9a"
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 1,
            fontColor: "#9a9a9a",
          },
        },
      ],
    },
    title: {
      display: true,
      text: [
        "Activity Chart",
        "This shows how much work has been done on the project in the past 12 months",
      ],
    },
    tooltips: {
      enabled: false,
    },
  };

  return (
    <div style={{ height: expanded ? "320px" : "120px" }}>
      <Line data={data} options={options} />
    </div>
  );
}
