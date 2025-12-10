import { MetaProvider } from '@solidjs/meta';
import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { XCard } from './XCard.js';

beforeEach(() => {
  document.head.innerHTML = '';
});
afterEach(() => {
  cleanup();
  document.head.innerHTML = '';
});

describe('XCard', () => {
  it('renders twitter card tags', () => {
    render(() => (
      <MetaProvider>
        <XCard
          author="Kito"
          description="desc"
          image="/img.png"
          siteName="Example"
          title="Page"
        />
      </MetaProvider>
    ));
    const head = document.head;
    expect(
      head.querySelector('meta[name="twitter:card"]')?.getAttribute('content'),
    ).toBe('summary_large_image');
    expect(
      head
        .querySelector('meta[name="twitter:creator"]')
        ?.getAttribute('content'),
    ).toBe('Kito');
    expect(
      head
        .querySelector('meta[name="twitter:description"]')
        ?.getAttribute('content'),
    ).toBe('desc');
    expect(
      head.querySelector('meta[name="twitter:image"]')?.getAttribute('content'),
    ).toBe('/img.png');
    expect(
      head
        .querySelector('meta[name="twitter:author"]')
        ?.getAttribute('content'),
    ).toBe('Kito');
    expect(
      head.querySelector('meta[name="twitter:title"]')?.getAttribute('content'),
    ).toBe('Page | Example');
  });
});
