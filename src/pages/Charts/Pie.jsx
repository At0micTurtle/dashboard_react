/* eslint-disable no-unused-vars */
import React from 'react';
import { ChartsHeader, Pie as PieChart } from '../../components';
import { pieChartData } from '../../data/dummy';

export default function Pie() {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader title='Project Cost Breakdown' category='Pie' />

      <div className='w-full'>
        <PieChart id='chart-pie' data={pieChartData} legendVisibility height='full' />
      </div>
    </div>
  )
};
