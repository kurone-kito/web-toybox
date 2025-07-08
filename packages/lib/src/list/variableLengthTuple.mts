import type { TupleOf } from 'type-fest';

/**
 * type definition of variable-length tuples with a minimum number of
 * length guaranteed
 * @template T the type of the tuple elements
 * @template N the minimum number of the tuple length
 * @example
 * ```ts
 * type Example = VariableLengthTuple<number, 2>;
 * const example1: Example = [1, 2]; // valid
 * const example2: Example = [1, 2, 3, 4]; // valid
 * const example3: Example = [1]; // invalid
 * ```
 */
export type VariableLengthTuple<T, N extends number> = readonly [
  ...TupleOf<N, T>,
  ...T[],
];

/**
 * determines if the specified argument is a variable-length tuple
 * @param value the value to check
 * @param length the minimum length of the tuple
 * @returns `true` if the specified argument is a variable-length tuple
 * @example
 * ```ts
 * isVariableLengthTuple([1, 2, 3], 2); //=> true
 * isVariableLengthTuple([1], 2); //=> false
 * ```
 */
export const isVariableLengthTuple = <const T, const N extends number>(
  value: readonly T[],
  length: N,
): value is VariableLengthTuple<T, N> => value.length >= length;
