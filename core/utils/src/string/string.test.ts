import capitalizeEachWord from './capitalizeEachWord';
import replacePlaceholdersWithValues from './replacePlaceholdersWithValues';

describe('Test capitalizeEachWord function', () => {
  // TODO: Test case should be improved
  it('should transform the first letter of each word in a string to uppercase', () => {
    const initialString = 'should transform the first letter';
    const result = capitalizeEachWord(initialString);
    const expectedValues = initialString.split(' ').map((word) => word[0].toUpperCase());
    result.split(' ').forEach((word, index) => {
      expect(word[0]).toBe(expectedValues[index]);
    });
  });
});

describe('Test replacePlaceholdersWithValues function', () => {
  it('should replace placeholders in string with values', () => {
    const values = {
      name: 'Abcdefg',
      counts: {
        displays: {
          total: 8,
          active: 9,
        },
        presentations: 10,
      },
    };
    const paths = {
      active: ['counts', 'displays', 'active'],
    };
    const initialString = 'Welcome {name}! You have {active} active displays out of {totalTypo}.';
    const expectedString = `Welcome ${values.name}! You have ${values.counts.displays.active} active displays out of .`;
    const result = replacePlaceholdersWithValues(initialString, values, paths);
    expect(result).toBe(expectedString);
  });
});
