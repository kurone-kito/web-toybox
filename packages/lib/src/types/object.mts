/**
 * Type definition that the readonly record.
 * @template K The record key type.
 * @template T The record value type.
 */
export type ReadonlyRecord<in K extends RecordKey, out T> = {
  readonly [P in K]: T;
};

/** Type definition that the record key. */
// biome-ignore lint/suspicious/noExplicitAny: this utility type relies on keyof any for broad key compatibility
export type RecordKey = keyof any;
