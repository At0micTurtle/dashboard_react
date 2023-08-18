/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React from 'react';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  DateTime,
  Tooltip,
  Zoom,
  Logarithmic,
  Crosshair
} from '@syncfusion/ej2-react-charts';

const date1 = new Date('2017, 1, 1');

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
};
const returnValue = financialChartData.filter(filterValue);

export default function Financial() {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader title='AAPLE Historical - RIO' category='Financial' />
      <ChartComponent
        id='charts'
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
      >
        <Inject services={[HiloSeries, DateTime, Zoom, Tooltip, Logarithmic, Crosshair]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName='x'
            yName='low'
            name='Apple Inc'
            type='Hilo'
            low='low'
            high='high'
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
};
