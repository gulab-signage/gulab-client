/**
 * Capitalize each word in a string.
 * @param {string} value - Text value.
 * @returns {string} Returns the input value but each word first letter is uppercase.
 */
export default function capitalizeEachWord(value: string): string {
  return value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}
