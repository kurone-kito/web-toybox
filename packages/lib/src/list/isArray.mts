/** Type definition for a type guard that checks if a value is an array. */
export type IsArray = <const T>(arg: unknown) => arg is readonly T[];

/**
 * Determines if the specified argument is an array.
 *
 * The difference between this function and `Array.isArray` is that
 * this function is a type guard that can be used for type narrowing.
 */
export const isArray: IsArray = Array.isArray;
