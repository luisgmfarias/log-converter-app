import { axiosInstance } from '../api'

export async function getLogText() {
  const { data } = await axiosInstance.get(`/convert_log`)
  return data
}

export async function getLogFile() {
  const { data } = await axiosInstance.get(`/converted_log_file`)
  return data
}

export default { getLogText, getLogFile }
