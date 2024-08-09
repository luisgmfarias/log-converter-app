import { styled } from 'styled-components'

import colors from '../../constants/colors'

export const Container = styled.div<{
  minWidth?: number
}>`
  ${({ minWidth }) =>
    minWidth ? `width: fit-content; min-width: ${minWidth}px` : 'width: 100%'};
  background-color: ${colors.lightGrey};
  border-radius: 10px;
  transition: ease 0.2s;
  box-shadow:
    3px 3px 3px #d8dae0b1,
    -1.25px -1.25px 3px #ffffff;
  border: 1px solid ${colors.lightGrey};
  padding: 12px;

  &:hover {
    background-color: #d3ddf1;
    border: 1px solid #1a1a1a;
    padding: 12px;
  }
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
`

export const Description = styled.div`
  margin-top: 4px;
  font-weight: 300;
  font-size: 12px;
`

export const Value = styled.div`
  margin-top: 12px;
  font-weight: 400;
  font-size: 24px;
`
