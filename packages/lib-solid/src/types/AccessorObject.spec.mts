import type { Accessor, Setter } from 'solid-js';
import { describe, expectTypeOf, it } from 'vitest';
import type { AccessorObject } from './AccessorObject.mjs';

describe('AccessorObject', () => {
  it('should create an object with accessor and setter properties', () => {
    expectTypeOf<AccessorObject<number, 'value'>>().toEqualTypeOf<{
      readonly value: Accessor<number>;
      readonly setValue: Setter<number>;
    }>();
  });
});
