import React from 'react';

import { data } from '../../assets/Data';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function AChart() {
  return (
   <div className='w-full h-96'>

<ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#4a00ff"
          fill="#4a00ff"
        />
      </AreaChart>
    </ResponsiveContainer>
   </div>
  );
}

export default AChart;