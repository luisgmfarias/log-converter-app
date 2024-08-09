import React from 'react'

import * as SC from './styles'

interface ICard {
  title?: string
  description?: string
  minWidth?: number
  value?: number
  children?: React.ReactNode
}

export const Card = ({
  title,
  description,
  minWidth,
  value,
  children,
}: ICard) => {
  return (
    <SC.Container minWidth={minWidth}>
      {title && <SC.Title>{title}</SC.Title>}
      {description && <SC.Description>{description}</SC.Description>}
      {value && <SC.Value>{value}</SC.Value>}
      {children}
    </SC.Container>
  )
}
