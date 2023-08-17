/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

export default function SparkLine({ id, height, width, color, data, type, currentColor }) {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      fill={color}
      border={{ color: currentColor, width: 2}}
      dataSource={data}
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${xval} : data ${yval}',
        trackLineSettings: {
          visible: true,
        },
      }}
      valueType='Numeric'
      xName='xval'
      yName='yval'
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
};
