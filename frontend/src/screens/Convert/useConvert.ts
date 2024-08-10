import { useState } from 'react'

import { useMutation } from 'react-query'

import { getLogText } from '../../services/clients/ConvertClient'

export const useConvert = () => {
  const [urlInput, setUrlInput] = useState<string>('')
  const [convertedLog, setConvertedLog] = useState<string>('')
  const [inputLog, setInputLog] = useState<string[]>([])

  const convertMutation = useMutation(getLogText, {
    onSuccess: data => {
      setConvertedLog(data.outputLog)
      setInputLog(data.inputLog)
    },
    onError: () => {
      console.error('Erro ao converter o log!')
    },
  })

  const handleConvert = () => {
    convertMutation.mutate(urlInput)
  }

  const downloadFile = () => {
    const blob = new Blob([convertedLog], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'converted-log.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const formattedInputLog = inputLog.map(log => log.trim()).join('\n')

  return {
    urlInput,
    setUrlInput,
    formattedInputLog,
    convertedLog,
    handleConvert,
    downloadFile,
  }
}
