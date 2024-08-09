import React from 'react'

import * as SC from './styles'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Topbar from '../../components/Topbar'

export const Convert = () => (
  <>
    <Topbar />
    <SC.Container>
      <div>
        <Card minWidth={400} description="URL do log a ser convertido:">
          <SC.InputWrapper>
            <SC.Input type="text" />
            <div>
              <Button>Converter</Button>
            </div>
          </SC.InputWrapper>
        </Card>
      </div>
      <SC.OutputContainer>
        <div>
          <SC.TextArea value="" disabled />
        </div>
        <div>
          <p>Resultado:</p>
          <SC.TextArea value="teste" disabled />
        </div>
      </SC.OutputContainer>
    </SC.Container>
  </>
)
