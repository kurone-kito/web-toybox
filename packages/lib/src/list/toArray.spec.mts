import { describe, expect, it } from 'vitest';
import { toArray } from './toArray.mjs';

describe('toArray', () => {
  it('should convert a single value to an array', () => {
    expect(toArray(5)).toEqual([5]);
    expect(toArray('hello')).toEqual(['hello']);
    expect(toArray(true)).toEqual([true]);
  });

  it('should return the same array if an array is provided', () => {
    expect(toArray([1, 2, 3])).toEqual([1, 2, 3]);
    expect(toArray(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(toArray([false, true])).toEqual([false, true]);
  });
});
