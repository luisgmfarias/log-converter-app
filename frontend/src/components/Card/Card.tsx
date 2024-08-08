import React from 'react'

import * as SC from './styles'

interface ICard {
  title: string
  description: string
  minWidth: number
  value?: number
}

export const Card = ({ title, description, minWidth, value }: ICard) => {
  return (
    <SC.Container minWidth={minWidth}>
      <SC.Title>{title}</SC.Title>
      <SC.Description>{description}</SC.Description>
      <SC.Value>{value}</SC.Value>
    </SC.Container>
  )
}
