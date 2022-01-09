/**
 * Immutable remove the first element from the array.
 * @param {T[]} array - Array from which the element will be removed.
 * @return {T[]} New array with removed first element.
 */
export default function shift<T>(array: T[]): T[] {
  return array.slice(1);
}
