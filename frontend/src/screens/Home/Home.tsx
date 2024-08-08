import React from 'react'

import * as SC from './styles'
import Card from '../../components/Card'
import Topbar from '../../components/Topbar'

export const Home = () => {
  return (
    <>
      <Topbar />
      <SC.Container>
        <Card
          title="Conversões"
          description="Número de conversões"
          minWidth={300}
          value={300}
        />
        <Card
          title="Conversões por dia"
          description="Histograma da quantidade de conversões por dia"
          minWidth={300}
          value={300}
        />
      </SC.Container>
    </>
  )
}
