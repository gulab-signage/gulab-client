/**
 * Return new object with all values set to `undefined`.
 * You can provide a second argument if you want the values to be set to something other than `undefined`,
 * for example null.
 * Arrays will always be set to an empty array.
 * @param {T} obj - Object whose values we want to remove.
 * @param {any} [nextValue=undefined] - Next properties value.
 * @returns {T} - New object without values for his properties.
 */
export default function removeValues<T extends Record<string, any>>(obj: T, nextValue = undefined): T {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          return { [key]: [] };
        }

        if (value instanceof Date) {
          return { [key]: nextValue };
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { [key]: removeValues<any>(value) };
      }

      return { [key]: nextValue };
    })
    .reduce((acc, cur) => ({ ...acc, ...cur }), {}) as unknown as T;
}
