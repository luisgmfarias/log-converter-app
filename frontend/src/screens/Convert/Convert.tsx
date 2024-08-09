import React from 'react'

import * as SC from './styles'
import { useConvert } from './useConvert'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Topbar from '../../components/Topbar'

export const Convert = () => {
  const {
    urlInput,
    setUrlInput,
    handleConvert,
    convertedLog,
    inputLog,
    downloadFile,
  } = useConvert()

  return (
    <>
      <Topbar />
      <SC.Container>
        <SC.InputContainer>
          <Card minWidth={400} description="URL do log a ser convertido:">
            <SC.InputWrapper>
              <SC.Input
                type="text"
                value={urlInput}
                onChange={e => setUrlInput(e.target.value)}
              />
              <div>
                <Button onClick={() => handleConvert()}>Converter</Button>
              </div>
            </SC.InputWrapper>
          </Card>
          <SC.TextArea value={inputLog} disabled />
        </SC.InputContainer>
        <SC.OutputContainer>
          <div>
            <p>Resultado:</p>
            <SC.TextArea value={convertedLog} disabled />
          </div>
          <Button onClick={() => downloadFile()}>Download do arquivo</Button>
        </SC.OutputContainer>
      </SC.Container>
    </>
  )
}
