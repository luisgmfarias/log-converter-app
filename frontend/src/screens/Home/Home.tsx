import React from 'react'

import Histogram from './components/Histogram'
import * as SC from './styles'
import { useHome } from './useHome'
import Card from '../../components/Card'
import Topbar from '../../components/Topbar'
import { IConversionStats } from '../../types'

export const Home = () => {
  const { data } = useHome()

  const conversionStats = data?.conversionStats

  return (
    <>
      <Topbar />
      <SC.Container>
        <Card
          title="Conversões"
          description="Número de conversões"
          minWidth={300}
          value={data?.logCount}
        />
        <Histogram conversionStats={conversionStats as IConversionStats[]} />
      </SC.Container>
    </>
  )
}
