/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

export default class SparkLine extends React.Component {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;
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
        markerSettings={{ visible: ['All'], size: 3.5, fill: currentColor }}
        valueType='Numeric'
        xName='xval'
        yName='yval'
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    )
  }
};
