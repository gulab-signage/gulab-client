/**
 * Immutable insert item in an array at a given index.
 * @template T
 * @param {T[]} array - Array in which we want to insert the element.
 * @param {number} index - The index at which we want to insert the element.
 * @param {T} item - The item we want to insert in the array.
 * @returns {T[]} New array with the item at the provided index.
 */
export default function insertAtIndex<T>(array: T[], index: number, item: T): T[] {
  return [...array.slice(0, index), item, ...array.slice(index)];
}
