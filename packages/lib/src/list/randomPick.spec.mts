import { describe, expect, it } from 'vitest';
import { randomPick } from './randomPick.mjs';

describe('pickRandomTuple', () => {
  it('should return undefined for empty array', () =>
    // @ts-expect-error
    expect(randomPick([])).toBeUndefined());

  it('should return the only item for single-item array', () => {
    const tuple = ['foo', 'abc123'] as const;
    expect(randomPick([tuple])).toEqual(tuple);
  });

  it('should return one of the items for multi-item array', () => {
    const items = [
      ['foo', 'abc123'],
      ['bar', 'def456'],
      ['baz', 'ghi789'],
    ] as const;
    expect(items).toContainEqual(randomPick<readonly [string, string]>(items));
  });
});
