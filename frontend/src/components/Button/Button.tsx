import React, { ButtonHTMLAttributes } from 'react'

import * as SC from './styles'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({ children, onClick }: IButton) => {
  return <SC.Container onClick={onClick}>{children}</SC.Container>
}
