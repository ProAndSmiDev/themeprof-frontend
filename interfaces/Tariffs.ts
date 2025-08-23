import type { TariffsName } from 'constants/tariffs'

export interface Tariffs {
  name: TariffsName
  icon: string
  options: string[]
  bases: string[]
  price?: number
}
