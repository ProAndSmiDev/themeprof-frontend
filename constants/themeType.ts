export const themeType= Object.freeze({
  DEFAULT: 'default',
  LIGHT: 'light',
} as const)

export type ThemeType = typeof themeType[keyof typeof themeType];
