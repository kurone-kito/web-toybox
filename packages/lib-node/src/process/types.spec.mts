import { describe, expectTypeOf, it } from 'vitest';
import type { ExecResult } from './types.mjs';

describe('ExecResult', () => {
  it('should have readonly properties stderr and stdout of type string', () => {
    expectTypeOf<ExecResult>().toEqualTypeOf<{
      readonly stderr: string;
      readonly stdout: string;
    }>();
  });
});
