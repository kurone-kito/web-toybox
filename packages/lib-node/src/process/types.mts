import type { ReadonlyRecord } from '@kurone-kito/web-toybox';

/**
 * Type definition for the result of an exec command,
 * containing stdout and stderr.
 */
export type ExecResult = ReadonlyRecord<'stderr' | 'stdout', string>;
