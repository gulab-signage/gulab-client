import removeValues from './removeValues';

describe('Test removeValues function', () => {
  it('should return new object with all values set to undefined', () => {
    const initialObj = {
      name: 'abcdefg',
      count: 8,
      active: true,
      lastUpdate: new Date(),
      config: {
        orientation: 'landscape',
        height: 200,
        active: false,
        createdAt: new Date(),
      },
      presentations: ['zero', 'one', 'two'],
    };
    const newObj = removeValues(initialObj);

    expect(newObj.name).toBeUndefined();
    expect(newObj.count).toBeUndefined();
    expect(newObj.active).toBeUndefined();
    expect(newObj.lastUpdate).toBeUndefined();
    expect(newObj.config.orientation).toBeUndefined();
    expect(newObj.config.height).toBeUndefined();
    expect(newObj.config.active).toBeUndefined();
    expect(newObj.config.createdAt).toBeUndefined();
    expect(newObj.presentations).toEqual([]);

    // Check the original object is not mutated
    expect(initialObj.name).not.toBeUndefined();
    expect(initialObj.count).not.toBeUndefined();
    expect(initialObj.active).not.toBeUndefined();
    expect(initialObj.lastUpdate).not.toBeUndefined();
    expect(initialObj.config.orientation).not.toBeUndefined();
    expect(initialObj.config.height).not.toBeUndefined();
    expect(initialObj.config.active).not.toBeUndefined();
    expect(initialObj.config.createdAt).not.toBeUndefined();
    expect(initialObj.presentations).not.toEqual([]);
  });
});
