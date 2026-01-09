import { isArray } from './isArray.mjs';

/**
 * Converts a value or array of values into an array.
 * @param value The value or array of values to convert.
 * @returns An array containing the value(s).
 */
// biome-ignore lint/complexity/noUselessTypeConstraint: false positive
export const toArray = <const T extends unknown>(
  value: T | readonly T[],
): readonly T[] => (isArray(value) ? value : [value]);
