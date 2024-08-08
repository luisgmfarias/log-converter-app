import React from 'react'

import * as SC from './styles'
import Button from '../Button'

export const Topbar = () => {
  return (
    <SC.Container>
      <div>
        <SC.Title>CLogs</SC.Title>
        Conversor de Logs
      </div>
      <div>
        <Button>Converter</Button>
      </div>
    </SC.Container>
  )
}
