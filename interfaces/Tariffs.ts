import type { tariffsName } from 'constants/tariffs'

type TariffsName = typeof tariffsName[keyof typeof tariffsName];

export interface Tariffs {
  name: TariffsName
  icon: string
  options: string[]
  bases: string[]
}
