import React from "react";
import { ChartContainer } from "./styles/ChartContainer.styled";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ data, info }) {
  let chartData = [];
  for (let i = 1; i < data[0].length; i++) {
    let vals = {
      name: data[0][i],
    };
    for (let j = 1; j < data.length; j++) {
      vals[data[j][0]] = data[j][i];
    }
    chartData.push(vals);
  }

  let color = [
    "#8884d8" ,
    "#FF5733" ,
    "#92D293" ,
    "#d7aff7" ,
    "#598a6f" ,
    "#ef77be" ,
    "#a2deff" ,
    "#163756" ,
    "#b50101" ,
    "#471212",
  ]

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height={700}>
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{
              value: `${info.x}`,
              position: "insideBottomRight",
              offset: -30,
            }}
          />
          <YAxis
            label={{
              value: `${info.y}`,
              position: "insideTop",
              offset: -50,
            }}
          />
          <Tooltip 
            label={data[0][0]}
            labelFormatter={name => data[0][0]+": "+name}
          />
          <Legend />
          {data.slice(1).map((line, i) => (
            <Line
              key={i}
              type="monotone"
              dataKey={line[0]}
              stroke={color[i]}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default Chart;