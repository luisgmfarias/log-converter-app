import { axiosInstance } from '../api'

export async function getStats() {
  const { data } = await axiosInstance.get(`/stats`)
  return data
}

export default { getStats }
