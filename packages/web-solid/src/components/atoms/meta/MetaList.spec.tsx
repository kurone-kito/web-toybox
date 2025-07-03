import { MetaProvider } from '@solidjs/meta';
import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { MetaList } from './MetaList.js';

beforeEach(() => {
  document.head.innerHTML = '';
});
afterEach(() => {
  cleanup();
  document.head.innerHTML = '';
});

describe('MetaList', () => {
  it('renders meta tags', () => {
    render(() => (
      <MetaProvider>
        <MetaList
          author="John Doe"
          colorDark="#000"
          colorLight="#fff"
          description="desc"
          keywords="a,b"
        />
      </MetaProvider>
    ));

    const head = document.head;
    expect(
      head.querySelector('meta[name="author"]')?.getAttribute('content'),
    ).toBe('John Doe');
    expect(
      head.querySelector('meta[name="color-scheme"]')?.getAttribute('content'),
    ).toBe('light dark');
    expect(
      head.querySelector('meta[name="description"]')?.getAttribute('content'),
    ).toBe('desc');
    expect(
      head.querySelector('meta[name="generator"]')?.getAttribute('content'),
    ).toBe('SolidStart');
    expect(
      head.querySelector('meta[name="keywords"]')?.getAttribute('content'),
    ).toBe('a,b');
    expect(
      head.querySelector('meta[name="referer"]')?.getAttribute('content'),
    ).toBe('strict-origin-when-cross-origin');
    expect(
      head
        .querySelector(
          'meta[name="theme-color"][media="(prefers-color-scheme: light)"]',
        )
        ?.getAttribute('content'),
    ).toBe('#fff');
    expect(
      head
        .querySelector(
          'meta[name="theme-color"][media="(prefers-color-scheme: dark)"]',
        )
        ?.getAttribute('content'),
    ).toBe('#000');
    expect(
      head.querySelector('meta[name="viewport"]')?.getAttribute('content'),
    ).toBe('width=device-width, initial-scale=1, viewport-fit=cover');
  });
});
