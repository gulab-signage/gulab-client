/**
 * Immutable remove the last element from the array.
 * @param {T[]} array - Array from which the element will be removed.
 * @return {T[]} New array with removed last element.
 */
export default function pop<T>(array: T[]): T[] {
  return array.slice(0, -1);
}
