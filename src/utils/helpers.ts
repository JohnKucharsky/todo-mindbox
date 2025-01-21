export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K | K[],
): Omit<T, K> => {
  const result = { ...obj }

  if (!Array.isArray(keys)) {
    delete result[keys]
    return result
  }

  for (const key of keys) {
    delete result[key]
  }

  return result
}
