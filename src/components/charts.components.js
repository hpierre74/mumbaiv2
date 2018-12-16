import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const months = [
  { name: 'Jan-2018', dinner: 22, lunch: 34 },
  { name: 'Feb-2018', dinner: 76, lunch: 23 },
  { name: 'Mar-2018', dinner: 50, lunch: 43 },
  { name: 'Apr-2018', dinner: 47, lunch: 29 },
  { name: 'Jun-2018', dinner: 79, lunch: 16 },
  { name: 'Jul-2018', dinner: 27, lunch: 10 },
  { name: 'Aug-2018', dinner: 12, lunch: 6 },
  { name: 'Sep-2018', dinner: 34, lunch: 17 },
  { name: 'Oct-2018', dinner: 30, lunch: 23 },
  { name: 'Nov-2018', dinner: 15, lunch: 6 },
  { name: 'Dec-2018', dinner: 31, lunch: 7 },
  { name: 'Jan-2019', dinner: 22, lunch: 34 },
  { name: 'Feb-2019', dinner: 76, lunch: 23 },
  { name: 'Mar-2019', dinner: 50, lunch: 43 },
  { name: 'Apr-2019', dinner: 47, lunch: 29 },
  { name: 'Jun-2019', dinner: 60, lunch: 14 },
  { name: 'Jul-2019', dinner: 27, lunch: 10 },
  { name: 'Aug-2019', dinner: 10, lunch: 0 },
  { name: 'Sep-2019', dinner: 34, lunch: 17 },
  { name: 'Oct-2019', dinner: 30, lunch: 23 },
  { name: 'Nov-2019', dinner: 15, lunch: 6 },
  { name: 'Dec-2019', dinner: 45, lunch: 16 },
  { name: 'Jan-2020', dinner: 22, lunch: 34 },
  { name: 'Feb-2020', dinner: 89, lunch: 23 },
  { name: 'Mar-2020', dinner: 50, lunch: 43 },
  { name: 'Apr-2020', dinner: 47, lunch: 29 },
  { name: 'Jun-2020', dinner: 79, lunch: 16 },
  { name: 'Jul-2020', dinner: 27, lunch: 10 },
  { name: 'Aug-2020', dinner: 26, lunch: 6 },
  { name: 'Sep-2020', dinner: 34, lunch: 17 },
  { name: 'Oct-2020', dinner: 30, lunch: 23 },
  { name: 'Nov-2020', dinner: 15, lunch: 6 },
  { name: 'Dec-2020', dinner: 9, lunch: 2 },
];

function SimpleLineChart() {
  return (
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={months}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="dinner" stroke="#82ca9d" />
        <Line type="monotone" dataKey="lunch" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
