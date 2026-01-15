import { describe, expect, it, vi } from 'vitest';
import { createDisposable } from './createDisposable.mjs';

describe('createDisposable', () => {
  describe('basic functionality', () => {
    it('should create a resource and dispose it', () => {
      const disposeFn = vi.fn();
      const disposable = createDisposable({
        create: () => 42,
        dispose: disposeFn,
      });
      expect(disposable).toBeCloseTo(42);
      expect(disposeFn).not.toHaveBeenCalled();
      disposable[Symbol.dispose]();
      expect(disposeFn).toHaveBeenCalledWith(42);
      expect(disposeFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('preserving original Symbol.dispose', () => {
    it('should call both custom dispose and original Symbol.dispose', () => {
      const originalDisposeFn = vi.fn();
      const customDisposeFn = vi.fn();
      const resourceWithDispose = {
        value: 'test',
        [Symbol.dispose]: originalDisposeFn,
      };
      const disposable = createDisposable({
        create: () => resourceWithDispose,
        dispose: customDisposeFn,
      });
      disposable[Symbol.dispose]();
      expect(customDisposeFn).toHaveBeenCalledWith(resourceWithDispose);
      expect(originalDisposeFn).toHaveBeenCalled();
      expect(customDisposeFn).toHaveBeenCalledTimes(1);
      expect(originalDisposeFn).toHaveBeenCalledTimes(1);
    });

    it('should call original Symbol.dispose after custom dispose', () => {
      const callOrder: string[] = [];
      const resourceWithDispose = {
        value: 'test',
        [Symbol.dispose]: () => callOrder.push('original'),
      };
      const disposable = createDisposable({
        create: () => resourceWithDispose,
        dispose: () => callOrder.push('custom'),
      });
      disposable[Symbol.dispose]();
      expect(callOrder).toEqual(['custom', 'original']);
    });

    it('should work when resource does not have Symbol.dispose', () => {
      const customDisposeFn = vi.fn();
      const resource = { value: 'no dispose' };
      const disposable = createDisposable({
        create: () => resource,
        dispose: customDisposeFn,
      });
      disposable[Symbol.dispose]();
      expect(customDisposeFn).toHaveBeenCalledWith(resource);
      expect(customDisposeFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('error handling', () => {
    it('should call dispose when create throws an error', () => {
      const disposeFn = vi.fn();
      const error = new Error('Creation failed');
      expect(() =>
        createDisposable({
          create: () => {
            throw error;
          },
          dispose: disposeFn,
        }),
      ).toThrow(error);
      expect(disposeFn).not.toHaveBeenCalled();
    });

    it('should not call dispose multiple times', () => {
      const disposeFn = vi.fn();
      const resource = { value: 'test' };
      const disposable = createDisposable({
        create: () => resource,
        dispose: disposeFn,
      });
      disposable[Symbol.dispose]();
      disposable[Symbol.dispose]();
      disposable[Symbol.dispose]();
      expect(disposeFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('using with using statement', () => {
    it('should work with using statement', () => {
      const disposeFn = vi.fn();
      const resource = { value: 'test' };
      {
        using disposable = createDisposable({
          create: () => resource,
          dispose: disposeFn,
        });
        expect(disposable).toHaveProperty('value', 'test');
        expect(disposeFn).not.toHaveBeenCalled();
      }
      expect(disposeFn).toHaveBeenCalledWith(resource);
      expect(disposeFn).toHaveBeenCalledTimes(1);
    });
  });
});
