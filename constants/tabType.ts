export const tabType = Object.freeze({
  INFO: 'info',
  CHARS: 'chars',
  FEEDBACK: 'feedback',
})

export type TabType = typeof tabType[keyof typeof tabType]
