/**
 * Type definition of the function that receives a value and returns a
 * result.
 * @template T Type of the input value.
 * @template R Type of the return value.
 */
export type Func<in T, out R> = (x: T) => R;

/**
 * Type definition of the function that gets the value.
 * @template T Type of the value.
 */
export type Getter<out T> = () => T;

/**
 * Type definition of the function that gets the value from
 * an optional source.
 *
 * @template T Type of the input value.
 * @template R Type of the return value.
 */
export type OptionalFunc<in T, out R> = (x?: T) => R;
