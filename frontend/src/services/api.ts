import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.LOGCONVERTER_API_URL,
  timeout: 25000,
})
