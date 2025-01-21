export const TestKeys = {
  add: 'add',
  input: 'input',
  All: 'All',
  Done: 'Done',
  Todo: 'Todo',
  remove: 'remove',
  item: 'item',
} as const

export type TestKeysType = keyof typeof TestKeys

export const addTestKey = (testKey?: TestKeysType) =>
  testKey
    ? {
        'data-cy': testKey,
      }
    : {}
