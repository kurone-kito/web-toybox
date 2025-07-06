import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import Index from './index.js';

describe('Index', () => {
  it('Show the hello world', async () => {
    const { getByText } = render(() => <Index />);
    expect(getByText('Hello, world!')).toBeDefined();
  });
});
