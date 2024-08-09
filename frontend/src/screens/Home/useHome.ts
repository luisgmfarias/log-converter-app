import { useQuery } from 'react-query'

import { getStats } from '../../services/clients/StatsClient'
import { IStats } from '../../types'

export const useHome = () => {
  const { data } = useQuery<IStats>('getStats', async () => getStats())

  return {
    data,
  }
}
