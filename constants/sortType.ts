export const sortType = Object.freeze({
  DEFAULT: 'default',
  EXPENSIVE: 'expensive',
  CHEAP: 'cheap',
})

export type SortType = typeof sortType[keyof typeof sortType]
