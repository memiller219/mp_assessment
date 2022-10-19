import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Card } from "@mui/material";

const HighChart = ({ score, frequency }) => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Your Uniqueness<br> score is<br>" + Number(score).toFixed(2),
      align: "center",
      verticalAlign: "middle",
      y: 50,
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "140%",
      },
    },
    series: [
      {
        type: "pie",
        innerSize: "60%",
        data: Object.entries(frequency),
      },
    ],
  };

  return (

      <Card sx={{ maxWidth: 900, m: "50px 0" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Card>

  );
};

export default HighChart;
