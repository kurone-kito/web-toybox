import { expect, it } from 'vitest';
import hello from './index.mts';

it('should export hello', () => expect(hello).toBe('Hello, world!'));
