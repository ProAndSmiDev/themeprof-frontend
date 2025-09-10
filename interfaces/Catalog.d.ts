import type { SortType } from 'constants/sortType'

interface Catalog {
  products?: Object[]
  loaded?: boolean
  sortedBy?: SortType
  filteredBy?: string[]
}
