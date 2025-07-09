import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { detectImportWithError, isImport } from './isImport.mjs';

const { realpathSync } = vi.hoisted(() => ({ realpathSync: (p: string) => p }));

vi.mock('node:fs', () => ({ realpathSync }));

let originalArgv: string[];

beforeAll(() => {
  originalArgv = process.argv;
});

describe('isImport', () => {
  afterEach(() => {
    process.argv = originalArgv;
    vi.clearAllMocks();
  });

  it('returns false when script is entry', () => {
    process.argv = ['node', '/entry.mjs', 'a'];
    expect(isImport('file:///entry.mjs')).toBeFalsy();
  });

  it('returns true when not entry', () => {
    process.argv = ['node', '/other.mjs'];
    expect(isImport('file:///entry.mjs')).toBeTruthy();
  });
});

describe('detectImportWithError', () => {
  afterEach(() => {
    process.argv = originalArgv;
    vi.clearAllMocks();
  });

  it('does not throw when script is entry', () => {
    process.argv = ['node', '/entry.mjs', 'a'];
    expect(() => detectImportWithError('file:///entry.mjs')).not.toThrow();
  });

  it('throws when not entry', () => {
    process.argv = ['node', '/other.mjs'];
    expect(() => detectImportWithError('file:///entry.mjs')).toThrow(
      'This module is being imported.',
    );
  });
});
