/**
 * Type definition of the function to convert each element of the array.
 * e.g. `Array<T>.map()`
 * @template T The type of the array element.
 * @template U The type of the converted element.
 */
export type Mapper<in T, out U> = (
  value: T,
  index: number,
  array: readonly T[],
) => U;

/**
 * Type definition of the function to test each element of the array,
 * e.g. `Array<T>.filter()`
 * @template T The type of the array element.
 * @template U The type of the test result.
 */
export type Predicate<T, U extends boolean = boolean> = Mapper<T, U>;
