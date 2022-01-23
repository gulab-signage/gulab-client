/**
 * Update a single object in an array.
 * @template T
 * @param {T[]} array - Array containing the object to update.
 * @param {number} index - Position of the object to be updated.
 * @param {T} obj - Object containing the updated properties.
 * @return {T[]} Array with updated object.
 */
export default function updateAtIndex<T>(array: T[], index: number, obj: T) {
  return array.map((item, _index) => {
    if (index !== _index) {
      return item;
    }

    return {
      ...item,
      ...obj,
    };
  });
}
