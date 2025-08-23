export const buttonType= Object.freeze({
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
} as const)

export type ButtonType = typeof buttonType[keyof typeof buttonType];
