import { renderHook } from '@solidjs/testing-library';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { createTick } from './createTick.mjs';

describe('createTick', () => {
  let clock: ReturnType<typeof vi.useFakeTimers>;

  beforeAll(() => {
    clock = vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterAll(() => {
    clock.useRealTimers();
  });

  it('calls the callback at specified intervals', () => {
    const callback = vi.fn();
    renderHook(() => createTick({ callback, interval: 1000 }));
    expect(callback).not.toHaveBeenCalled();
    clock.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(1);
    clock.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalledTimes(3);
  });

  it('calls the callback immediately if immediate is true', () => {
    const callback = vi.fn();
    renderHook(() => createTick({ callback, interval: 1000, immediate: true }));
    expect(callback).toHaveBeenCalledTimes(1);
    clock.advanceTimersByTime(1000);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
