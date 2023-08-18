/* eslint-disable no-unused-vars */
import React from 'react';
import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  DataLabel,
  Tooltip,
  Category,
  Legend
} from '@syncfusion/ej2-react-charts';

export default function Area() {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader title='Olympic Medal Counts - RIO' category='Bar' />
      <ChartComponent
        id='charts'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}      
      >
        <Inject services={[ColumnSeries, DataLabel, Legend, Tooltip, Category]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
};
