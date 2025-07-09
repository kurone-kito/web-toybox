import { realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * Determine if the current module is being imported or executed directly.
 * @param url Value of `import.meta.url` from the caller.
 * @returns `true` if the module is imported, `false` if executed directly.
 * @example
 * ```ts
 * // example.mts
 * import { isImport } from '@kurone-kito/web-toybox-node';
 * console.log(isImport(import.meta.url));
 * ```
 * Running `node example.mts` will log `false`.
 * Importing `example.mts` in another module will log `true`.
 */
export const isImport = (url: string): boolean => {
  const [, bin = ''] = process.argv;
  return realpathSync(bin) !== fileURLToPath(url);
};

/**
 * Throw an error if the current module is being imported.
 * @param url Value of `import.meta.url` from the caller.
 * @throws Error if the module is imported.
 * @example
 * ```ts
 * // example.mts
 * import { detectImportWithError } from '@kurone-kito/web-toybox-node';
 * detectImportWithError(import.meta.url);
 * console.log('This line will only run if the module is executed directly.');
 * ```
 * Running `node example.mts` will log the message.
 * Importing `example.mts` in another module will throw an error.
 */
export const detectImportWithError = (url: string): void => {
  if (isImport(url)) {
    throw new Error('This module is being imported.');
  }
};
