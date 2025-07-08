import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { wait } from './wait.mjs';

describe('wait', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('resolves after specified milliseconds', async () => {
    const promise = wait(1000);

    // タイマーを進める
    vi.advanceTimersByTime(1000);

    await promise;
    expect(vi.getTimerCount()).toBe(0);
  });

  it('rejects immediately if signal is already aborted', async () => {
    const controller = new AbortController();
    controller.abort();

    await expect(wait(1000, controller.signal)).rejects.toThrow(
      new DOMException('The operation was aborted.', 'AbortError'),
    );
  });

  it('rejects when signal is aborted during wait', async () => {
    const controller = new AbortController();
    const promise = wait(1000, controller.signal);

    // 500ms後にアボート
    vi.advanceTimersByTime(500);
    controller.abort();

    await expect(promise).rejects.toThrow(
      new DOMException('The operation was aborted.', 'AbortError'),
    );
  });

  it('clears timeout when aborted', async () => {
    const controller = new AbortController();
    const promise = wait(1000, controller.signal);

    // 500ms後にアボート
    vi.advanceTimersByTime(500);
    controller.abort();

    try {
      await promise;
    } catch {
      // エラーは期待される
    }

    // タイマーがクリアされていることを確認
    expect(vi.getTimerCount()).toBe(0);
  });

  it('resolves with correct timing without signal', async () => {
    const promise = wait(500);

    // まだ解決されていない
    let resolved = false;
    promise.then(() => {
      resolved = true;
    });

    // 400ms進める（まだ解決されない）
    vi.advanceTimersByTime(400);
    await Promise.resolve(); // マイクロタスクを処理
    expect(resolved).toBe(false);

    // さらに100ms進める（合計500ms、解決される）
    vi.advanceTimersByTime(100);
    await promise;
    expect(resolved).toBe(true);
  });

  it('handles zero milliseconds', async () => {
    const promise = wait(0);
    vi.advanceTimersByTime(0);
    await expect(promise).resolves.toBeUndefined();
  });

  it('handles negative milliseconds', async () => {
    const promise = wait(-100);
    vi.advanceTimersByTime(0);
    await expect(promise).resolves.toBeUndefined();
  });

  it('abort event listener is added only once', () => {
    const controller = new AbortController();
    const addEventListenerSpy = vi.spyOn(controller.signal, 'addEventListener');

    wait(1000, controller.signal);

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'abort',
      expect.any(Function),
      { once: true },
    );
    expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
  });
});
