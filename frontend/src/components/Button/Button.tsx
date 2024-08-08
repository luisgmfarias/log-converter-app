import React from 'react'

import * as SC from './styles'

interface IButton {
  children: React.ReactNode
}

export const Button = ({ children }: IButton) => {
  return <SC.Container>{children}</SC.Container>
}
