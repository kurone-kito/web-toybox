/**
 * Chunks an async iterable into smaller async iterables of a specified
 * size.
 * @template T The type of elements in the async iterable.
 * @param iterable The async iterable to chunk.
 * @param size The size of each chunk.
 * @returns An async iterable of chunks.
 * @example
 * ```ts
 * const asyncIterable = (async function* () {
 *   for (let i = 1; i <= 10; i++) {
 *     yield i;
 *   }
 * })();
 *
 * const chunked = chunkAsync(asyncIterable, 3);
 *
 * for await (const chunk of chunked) {
 *   console.log(chunk);
 * }
 * // Output:
 * // [1, 2, 3]
 * // [4, 5, 6]
 * // [7, 8, 9]
 * // [10]
 * ```
 */
// biome-ignore lint/complexity/noUselessTypeConstraint: false positive
export const chunkAsync = <T extends unknown>(
  iterable: AsyncIterable<T>,
  size: number,
): AsyncIterable<readonly T[]> => {
  if (Number.isNaN(size) || size <= 0) {
    throw new RangeError('Chunk size must be a positive integer.');
  }
  async function* generator() {
    let chunk: T[] = [];
    for await (const item of iterable) {
      chunk.push(item);
      if (chunk.length >= size) {
        yield chunk;
        chunk = [];
      }
    }
    if (chunk.length) {
      yield chunk;
    }
  }
  return { [Symbol.asyncIterator]: generator };
};
