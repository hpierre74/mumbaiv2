import React from 'react';
import ComposedChart from 'recharts/lib/chart/ComposedChart';
import Area from 'recharts/lib/cartesian/Area';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import Brush from 'recharts/lib/cartesian/Brush';

const months = [
  {
    name: 'Jan-2018',
    dinner: 22,
    lunch: 34,
  },
  {
    name: 'Feb-2018',
    dinner: 76,
    lunch: 23,
  },
  {
    name: 'Mar-2018',
    dinner: 50,
    lunch: 43,
  },
  {
    name: 'Apr-2018',
    dinner: 47,
    lunch: 29,
  },
  {
    name: 'Jun-2018',
    dinner: 79,
    lunch: 16,
  },
  {
    name: 'Jul-2018',
    dinner: 27,
    lunch: 10,
  },
  {
    name: 'Aug-2018',
    dinner: 12,
    lunch: 6,
  },
  {
    name: 'Sep-2018',
    dinner: 34,
    lunch: 17,
  },
  {
    name: 'Oct-2018',
    dinner: 30,
    lunch: 23,
  },
  {
    name: 'Nov-2018',
    dinner: 15,
    lunch: 6,
  },
  {
    name: 'Dec-2018',
    dinner: 31,
    lunch: 7,
  },
  {
    name: 'Jan-2019',
    dinner: 22,
    lunch: 34,
  },
  {
    name: 'Feb-2019',
    dinner: 76,
    lunch: 23,
  },
  {
    name: 'Mar-2019',
    dinner: 50,
    lunch: 43,
  },
  {
    name: 'Apr-2019',
    dinner: 47,
    lunch: 29,
  },
  {
    name: 'Jun-2019',
    dinner: 60,
    lunch: 14,
  },
  {
    name: 'Jul-2019',
    dinner: 27,
    lunch: 10,
  },
  {
    name: 'Aug-2019',
    dinner: 10,
    lunch: 0,
  },
  {
    name: 'Sep-2019',
    dinner: 34,
    lunch: 17,
  },
  {
    name: 'Oct-2019',
    dinner: 30,
    lunch: 23,
  },
  {
    name: 'Nov-2019',
    dinner: 15,
    lunch: 6,
  },
  {
    name: 'Dec-2019',
    dinner: 45,
    lunch: 16,
  },
  {
    name: 'Jan-2020',
    dinner: 22,
    lunch: 34,
  },
  {
    name: 'Feb-2020',
    dinner: 89,
    lunch: 23,
  },
  {
    name: 'Mar-2020',
    dinner: 50,
    lunch: 43,
  },
  {
    name: 'Apr-2020',
    dinner: 47,
    lunch: 29,
  },
  {
    name: 'Jun-2020',
    dinner: 79,
    lunch: 16,
  },
  {
    name: 'Jul-2020',
    dinner: 27,
    lunch: 10,
  },
  {
    name: 'Aug-2020',
    dinner: 26,
    lunch: 6,
  },
  {
    name: 'Sep-2020',
    dinner: 34,
    lunch: 17,
  },
  {
    name: 'Oct-2020',
    dinner: 30,
    lunch: 23,
  },
  {
    name: 'Nov-2020',
    dinner: 15,
    lunch: 6,
  },
  {
    name: 'Dec-2020',
    dinner: 9,
    lunch: 2,
  },
];

function SimpleAreaChart() {
  return (
    <ComposedChart
      width={window.innerWidth > 1200 ? 500 : window.innerWidth > 700 ? 700 : window.innerWidth - 25}
      height={300}
      data={months}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Brush dataKey="name" height={30} stroke="#000" />
      <Area type="monotone" dataKey="dinner" fill="#ce5119" fillOpacity={0.6} stroke="#c2c11d" />
      <Area type="monotone" dataKey="lunch" fillOpacity={0.6} stroke="#8884d8" />{' '}
    </ComposedChart>
  );
}

export default SimpleAreaChart;
