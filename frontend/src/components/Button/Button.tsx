import React, { ButtonHTMLAttributes } from 'react'

import * as SC from './styles'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children }: IButton) => {
  return <SC.Container>{children}</SC.Container>
}
