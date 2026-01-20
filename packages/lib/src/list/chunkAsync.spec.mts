import { describe, expect, it } from 'vitest';
import { chunkAsync } from './chunkAsync.mjs';

describe('chunkAsync', () => {
  it('should chunk an async iterable into smaller async iterables of specified size', async () => {
    async function* asyncIterable() {
      for (let i = 1; i <= 10; i++) {
        yield i;
      }
    }

    const chunked = chunkAsync(asyncIterable(), 3);
    const result: number[][] = [];
    for await (const chunk of chunked) {
      result.push(chunk as number[]);
    }

    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });

  it('should handle chunk size larger than the iterable length', async () => {
    async function* asyncIterable() {
      for (let i = 1; i <= 5; i++) {
        yield i;
      }
    }

    const chunked = chunkAsync(asyncIterable(), 10);
    const result: number[][] = [];
    for await (const chunk of chunked) {
      result.push(chunk as number[]);
    }

    expect(result).toEqual([[1, 2, 3, 4, 5]]);
  });

  it('should throw an error for non-positive chunk size', () => {
    async function* asyncIterable() {
      for (let i = 1; i <= 5; i++) {
        yield i;
      }
    }

    expect(() => chunkAsync(asyncIterable(), 0)).toThrow(
      'Chunk size must be a positive integer.',
    );
    expect(() => chunkAsync(asyncIterable(), -2)).toThrow(
      'Chunk size must be a positive integer.',
    );
    expect(() => chunkAsync(asyncIterable(), Number.NaN)).toThrow(
      'Chunk size must be a positive integer.',
    );
  });
});
