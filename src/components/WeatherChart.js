import React from "react";
import { ResponsiveLine } from "@nivo/line";

function WeatherChart({ weatherData }) {
  let chartData = [];
  console.log("WeatherChart ", weatherData);
  if (weatherData.list) {
    chartData = weatherData.list.map((day) => {
      return {
        date: day.dt,
        temp: day.main.temp,
      };
    });
  }
  const data = [
    {
      id: "Temperature",
      color: "hsl(255, 70%, 50%)",
      data: chartData.map((data) => {
        return {
          x: new Date(data.date * 1000),
          y: data.temp,
        };
      }),
    },
  ];

  return (
    <div style={{ height: 500 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
        xScale={{ type: "time", format: "%Y-%m-%d", precision: "hour" }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: "%m-%d-%y %I:%M %p",
          tickValues: "every 12 hours",
          legend: "Date",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Temperature (°C)",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </div>
  );
}

export default WeatherChart;
