import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import * as SC from './styles'
import Button from '../Button'

interface IButtonMap {
  [key: string]: { go_to: string; btn_title: string }
}

const BUTTON_MAP: IButtonMap = {
  '/': { go_to: '/convert', btn_title: 'Converta o log' },
  '/convert': { go_to: '/', btn_title: 'Volte para o dashboard' },
}

export const Topbar = () => {
  const location = useLocation()

  return (
    <SC.Container>
      <div>
        <SC.Title>CLogs</SC.Title>
        Conversor de Logs
      </div>
      <div>
        <Link to={BUTTON_MAP[location.pathname].go_to}>
          <Button>{BUTTON_MAP[location.pathname].btn_title}</Button>
        </Link>
      </div>
    </SC.Container>
  )
}
