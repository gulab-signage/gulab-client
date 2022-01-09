import insertAtIndex from './immutability/insertAtIndex';
import pop from './immutability/pop';
import removeAtIndex from './immutability/removeAtIndex';
import shift from './immutability/shift';

describe('Test insertAtIndex function', () => {
  it('should create new array without modifying the existing array', () => {
    const initialArray = ['zero', 'one', 'two', 'three'];
    const initialLength = initialArray.length;
    const newItem = 'newItem';
    const newItemIndex = 2;
    const newArray = insertAtIndex(initialArray, newItemIndex, newItem);
    // Check the new array contains the new item at the specified index
    expect(newArray.length).toBe(initialLength + 1);
    expect(newArray[newItemIndex]).toBe(newItem);
    // Check the original array is not mutated
    expect(initialArray.length).toBe(initialLength);
    expect(initialArray[newItemIndex]).not.toBe(newItem);
  });
});

describe('Test pop function', () => {
  it('should return new array without the last element', () => {
    const lastItem = 'last';
    const initialArray = ['zero', 'one', 'two', 'three', lastItem];
    const initialLength = initialArray.length;
    const newArray = pop(initialArray);
    // Check the new array doesn't contain the last item
    expect(newArray.length).toBe(initialLength - 1);
    expect(newArray[newArray.length - 1]).not.toBe(lastItem);
    // Check the original array is not mutated
    expect(initialArray.length).toBe(initialLength);
    expect(initialArray[initialArray.length - 1]).toBe(lastItem);
  });
});

describe('Test removeAtIndex function', () => {
  it('should remove item from array without modifying the existing array', () => {
    const itemToRemove = 'remove';
    const itemToRemoveIndex = 2;
    const initialArray = ['zero', 'one', itemToRemove, 'three'];
    const initialLength = initialArray.length;
    const newArray = removeAtIndex(initialArray, itemToRemoveIndex);
    // Check the new array doesn't contain the same item at the removed index
    expect(newArray.length).toBe(initialLength - 1);
    expect(newArray[itemToRemoveIndex]).not.toBe(initialArray[itemToRemoveIndex]);
    // Check the original array is not mutated
    expect(initialArray.length).toBe(initialLength);
    expect(initialArray[itemToRemoveIndex]).toBe(itemToRemove);
  });
});

describe('Test shift function', () => {
  it('should return new array without the first element', () => {
    const firstItem = 'first';
    const initialArray = [firstItem, 'zero', 'one', 'two', 'three'];
    const initialLength = initialArray.length;
    const newArray = shift(initialArray);
    // Check the new array doesn't contain the first item
    expect(newArray.length).toBe(initialLength - 1);
    expect(newArray[0]).not.toBe(firstItem);
    // Check the original array is not mutated
    expect(initialArray.length).toBe(initialLength);
    expect(initialArray[0]).toBe(firstItem);
  });
});
