import { describe, expect, it } from 'vitest';
import { isVariableLengthTuple } from './variableLengthTuple.mjs';

describe('isVariableLengthTuple', () => {
  it('should return true if the specified argument is a variable-length tuple', () => {
    expect(isVariableLengthTuple([1, 2, 3], 2)).toBe(true);
    expect(isVariableLengthTuple([1, 2, 3], 3)).toBe(true);
    expect(isVariableLengthTuple([1, 2, 3], 4)).toBe(false);
  });
});
