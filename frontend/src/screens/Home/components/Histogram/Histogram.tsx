import React from 'react'

import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { useHistrogram } from './useHistogram'
import Card from '../../../../components/Card'
import { IConversionStats } from '../../../../types'

interface IHistogram {
  conversionStats: IConversionStats[]
}

export const Histogram = ({ conversionStats }: IHistogram) => {
  const { options } = useHistrogram(conversionStats)

  return (
    <Card>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Card>
  )
}
