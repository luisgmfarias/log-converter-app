import { axiosInstance } from '../api'

export async function getLogText(logUrl: string) {
  const { data } = await axiosInstance.post(`/convert_log`, {
    sourceUrl: logUrl,
  })
  return data
}

export async function getLogFile() {
  const { data } = await axiosInstance.get(`/converted_log_file`)
  return data
}

export default { getLogText, getLogFile }
