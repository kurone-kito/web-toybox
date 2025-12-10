import type { Accessor, Setter } from 'solid-js';
import type { Simplify } from 'type-fest';

/**
 * Type definition for an object with accessor and setter properties.
 * @template T The type of the accessor and setter values.
 * @template K The keys of the object.
 * @example
 * ```ts
 * type UserAccessorObject = AccessorObject<User, 'name' | 'age'>;
 *
 * const user: UserAccessorObject = {
 *   name: () => 'Alice',
 *   setName: (newName) => { ... },
 *   age: () => 42,
 *   setAge: (newAge) => { ... },
 * };
 * ```
 */
export type AccessorObject<T, K extends string> = Simplify<
  {
    readonly [P in K]: Accessor<T>;
  } & {
    readonly [P in K as `set${Capitalize<P>}`]: Setter<T>;
  }
>;
