/**
 * Immutable remove item from an array at a given index.
 * @template T
 * @param {T[]} array - Array from which we want to remove an element.
 * @param {number} index - The index of the element we want to remove.
 * @returns {T[]} - New array without the element at the provided index.
 */
export default function removeAtIndex<T>(array: T[], index: number): T[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
