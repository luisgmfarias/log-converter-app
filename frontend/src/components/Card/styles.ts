import { styled } from 'styled-components'

import colors from '../../constants/colors'

export const Container = styled.div`
  width: fit-content;
  background-color: ${colors.lightGrey};
  border-radius: 0.75em;
  cursor: pointer;
  transition: ease 0.2s;
  box-shadow:
    1em 1em 1em #d8dae0b1,
    -0.75em -0.75em 1em #ffffff;
  border: 1.5px solid ${colors.lightGrey};
`
