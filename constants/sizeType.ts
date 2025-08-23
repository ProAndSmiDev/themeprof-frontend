export const sizeType= Object.freeze({
  S12: 's12',
  S15: 's15',
  S20: 's20',
} as const)

export type SizeType = typeof sizeType[keyof typeof sizeType];
