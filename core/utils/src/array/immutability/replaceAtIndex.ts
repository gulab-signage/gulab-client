/**
 * Replaces the item at the given position with the new item.
 * @template T
 * @param {T[]} array - Array in which the element will be replaced.
 * @param {number} index - Position at which the element will be replaced.
 * @param {T} item - Item that will be replaced in the aray.
 * @returns {T[]} New array with replaced item.
 */
export default function replaceAtIndex<T>(array: T[], index: number, item: T) {
  return [...array.slice(0, index), item, ...array.slice(index + 1)];
}
