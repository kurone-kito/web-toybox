import { describe, expect, it, vi } from 'vitest';
import { createAsyncDisposable } from './createAsyncDisposable.mjs';

describe('createAsyncDisposable', () => {
  describe('basic functionality', () => {
    it('should create a resource and dispose it asynchronously', async () => {
      const disposeFn = vi.fn().mockResolvedValue(undefined);
      const disposable = await createAsyncDisposable({
        create: () => 42,
        dispose: disposeFn,
      });
      expect(disposable).toBeCloseTo(42);
      expect(disposeFn).not.toHaveBeenCalled();
      await disposable[Symbol.asyncDispose]();
      expect(disposeFn).toHaveBeenCalledWith(42);
      expect(disposeFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('preserving original Symbol.asyncDispose', () => {
    it('should call both custom dispose and original Symbol.asyncDispose', async () => {
      const originalDisposeFn = vi.fn().mockResolvedValue(undefined);
      const customDisposeFn = vi.fn().mockResolvedValue(undefined);
      const resourceWithDispose = {
        value: 'test',
        [Symbol.asyncDispose]: originalDisposeFn,
      };
      const disposable = await createAsyncDisposable({
        create: () => Promise.resolve(resourceWithDispose),
        dispose: customDisposeFn,
      });
      await disposable[Symbol.asyncDispose]();
      expect(customDisposeFn).toHaveBeenCalledWith(resourceWithDispose);
      expect(originalDisposeFn).toHaveBeenCalled();
      expect(customDisposeFn).toHaveBeenCalledTimes(1);
      expect(originalDisposeFn).toHaveBeenCalledTimes(1);
    });

    it('should call original Symbol.asyncDispose after custom dispose', async () => {
      const callOrder: string[] = [];
      const resourceWithDispose = {
        value: 'test',
        [Symbol.asyncDispose]: async () => callOrder.push('original'),
      };
      const disposable = await createAsyncDisposable({
        create: async () => resourceWithDispose,
        dispose: () => callOrder.push('custom'),
      });
      await disposable[Symbol.asyncDispose]();
      expect(callOrder).toEqual(['custom', 'original']);
    });

    it('should work when resource does not have Symbol.asyncDispose', async () => {
      const customDisposeFn = vi.fn().mockResolvedValue(undefined);
      const resource = { value: 'no dispose' };
      const disposable = await createAsyncDisposable({
        create: async () => resource,
        dispose: customDisposeFn,
      });
      await disposable[Symbol.asyncDispose]();
      expect(customDisposeFn).toHaveBeenCalledWith(resource);
      expect(customDisposeFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('error handling', () => {
    it('should dispose resource if creation fails', async () => {
      const disposeFn = vi.fn().mockResolvedValue(undefined);
      const createFn = vi
        .fn()
        .mockRejectedValueOnce(new Error('Creation failed'));
      await expect(
        createAsyncDisposable({
          create: createFn,
          dispose: disposeFn,
        }),
      ).rejects.toThrow('Creation failed');
      expect(disposeFn).not.toHaveBeenCalled();
    });
  });
});
