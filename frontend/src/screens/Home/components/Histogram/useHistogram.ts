import { Options } from 'highcharts'

import { IConversionStats } from '../../../../types'

export const useHistrogram = (conversionStats: IConversionStats[]) => {
  const options: Options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
    },
    title: {
      text: 'Conversões por dia',
    },
    xAxis: {
      categories: conversionStats?.map(({ date }) => date) ?? [],
    },
    series: [
      {
        name: 'Conversões',
        type: 'column',
        data: conversionStats?.map(stat => stat.count) ?? [],
      },
    ],
  }

  return { options }
}
