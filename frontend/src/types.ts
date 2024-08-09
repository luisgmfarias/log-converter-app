export interface IStats {
  logCount: number
  conversionStats: IConversionStats[]
}

export interface IConversionStats {
  date: string
  count: number
}
