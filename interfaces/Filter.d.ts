interface FilterOptions {
  caption: string
  value: string
  name: string
  isChecked?: boolean
  byRate?: boolean
}

interface Filter {
  caption: string
  count?: number
  options: FilterOptions[]
}
