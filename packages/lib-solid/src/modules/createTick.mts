import { onCleanup, onMount } from 'solid-js';

/** Type definition for the parameters of createTick function. */
export interface CreateTickParams {
  /** The callback function to be called at each tick. */
  readonly callback: () => void;

  /** Whether to call the callback immediately upon creation. */
  readonly immediate?: boolean | undefined;

  /** The interval in milliseconds between each tick. */
  readonly interval: number;
}

/**
 * Creates a ticking mechanism that calls the provided callback at
 * specified intervals.
 * @param params The parameters for creating the tick.
 * @example
 * ```ts
 * createTick({
 *   callback: () => console.log('Tick'),
 *   immediate: true,
 *   interval: 1000,
 * });
 * ```
 */
export const createTick = (params: CreateTickParams): void => {
  const { callback, immediate, interval } = params;
  let id: ReturnType<typeof setInterval> | undefined;
  onMount(() => {
    if (immediate) {
      callback();
    }
    id = setInterval(() => callback(), interval);
  });
  onCleanup(() => {
    if (id !== undefined) {
      clearInterval(id);
    }
  });
};
