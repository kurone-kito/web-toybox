/**
 * Wait for a specified amount of milliseconds. This can be cancelled using an AbortSignal.
 * @param ms Milliseconds to wait.
 * @param signal An optional AbortSignal to cancel the wait.
 * @throws {DOMException} If the operation is aborted.
 * @example
 * ```ts
 * import { wait } from '@web-toybox/lib/async';
 * const controller = new AbortController();
 * wait(5000, controller.signal).catch((err) => {
 *   if (err.name === 'AbortError') {
 *     console.log('Wait was aborted');
 *   } else {
 *     console.error(err);
 *   }
 * });
 * // To abort the wait
 * controller.abort();
 * ```
 */
export const wait = (ms: number, signal?: AbortSignal): Promise<void> =>
  new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('The operation was aborted.', 'AbortError'));
    } else {
      const timeoutId = setTimeout(resolve, ms);
      signal?.addEventListener(
        'abort',
        () => {
          clearTimeout(timeoutId);
          reject(new DOMException('The operation was aborted.', 'AbortError'));
        },
        { once: true },
      );
    }
  });
