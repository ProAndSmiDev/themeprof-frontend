export const tariffsName= Object.freeze({
  DEFAULT: 'Быстрый старт',
  STANDARD: 'Оптимальный',
  ADVANCED: 'Под ключ',
} as const)

export type TariffsName = typeof tariffsName[keyof typeof tariffsName];
