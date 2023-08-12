import React from "react";
import { ResponsiveLine } from "@nivo/line";
import "../App.css";

function WeatherChart({ weatherData }) {
  let locationData = [];
  locationData.push(weatherData[1]);
  weatherData = weatherData[0];

  const data = [
    {
      id: "Temperature",
      color: "hsl(255, 70%, 50%)",
      data: weatherData.map((data) => {
        return {
          x: new Date(data.date * 1000),
          y: data.temp,
        };
      }),
    },
  ];

  return (
    <div className="chart-container" style={{ height: 500 }}>
      <p>
        {locationData[0].name}, {locationData[0].state},{" "}
        {locationData[0].country}
      </p>
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
        theme={{
          text: {
            fontSize: 12,
            fontFamily: "Roboto",
          },
        }}
        axisBottom={{
          whiteSpace: "pre-wrap",
          //format: MM-DD-YY HH:MM (12 hour format)
          format: "%m-%d-%y\n%I:%M %p",
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
        enableSlices="x"
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 40,
            translateY: 0,
            itemsSpacing: 2,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 12,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}

export default WeatherChart;
