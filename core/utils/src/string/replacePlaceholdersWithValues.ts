import nestedProperty from 'nested-property';

/**
 * Replace placeholders in a string with values.
 * @param {string} text - String containing placeholders.
 * @param {Record<string, string>} values - Object with the placeholders values.
 * @param {Record<string, string[]>} [paths] - Optional. Object containing paths to nested values.
 * @returns {string} String where the placeholders are replaced with values.
 */
export default function replacePlaceholdersWithValues(
  text: string,
  values: Record<string, any>,
  paths?: Record<string, string[]>
): string {
  const iterator = text.matchAll(/\{(.*?)\}/g); // get the placeholders from the string
  let currItem = iterator.next();
  let result = text;

  while (!currItem.done) {
    const [propertyNameWithBrackets, propertyName] = currItem.value;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let value = values[propertyName];

    if (paths) {
      const pathToValue = paths[propertyName]?.join('.');

      if (pathToValue) {
        value = nestedProperty.get(values, pathToValue) as string;
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    result = result.replace(propertyNameWithBrackets, value ?? '');
    currItem = iterator.next();
  }

  return result;
}
