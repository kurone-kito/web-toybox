import type { NonEmptyTuple } from 'type-fest';

/** Type definition for the `randomPick` function. */
type RandomPick = <const T>(items: NonEmptyTuple<T>) => T;

/** @see {@link randomPick} */
const _randomPick = (items: NonEmptyTuple<unknown>) =>
  items[Math.floor(Math.random() * items.length)];

/**
 * Pick a random item from a non-empty array.
 * @param items Array of items to pick from.
 * @returns Randomly selected item.
 * @example
 * ```ts
 * const colors = ['red', 'green', 'blue'] as const;
 * const randomColor = randomPick(colors); // e.g., 'green'
 * ```
 */
export const randomPick = _randomPick as RandomPick;
