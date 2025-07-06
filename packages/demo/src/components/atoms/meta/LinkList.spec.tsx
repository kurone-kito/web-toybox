import { MetaProvider } from '@solidjs/meta';
import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { LinkList } from './LinkList.js';

beforeEach(() => {
  document.head.innerHTML = '';
});
afterEach(() => {
  cleanup();
  document.head.innerHTML = '';
});

describe('LinkList', () => {
  it('renders all link tags', () => {
    render(() => (
      <MetaProvider>
        <LinkList
          authorUrl="https://example.com/author"
          faviconType="image/png"
          faviconUrl="/favicon.png"
          licenseUrl="https://example.com/license"
          preloadImages={['/img1.png', '/img2.png']}
          next="/next"
          prev="/prev"
        />
      </MetaProvider>
    ));

    const head = document.head;
    expect(head.querySelector('link[rel="author"]')?.getAttribute('href')).toBe(
      'https://example.com/author',
    );
    const icon = head.querySelector('link[rel="icon"]');
    expect(icon?.getAttribute('href')).toBe('/favicon.png');
    expect(icon?.getAttribute('type')).toBe('image/png');
    const license = head.querySelector('link[rel="license"]');
    expect(license?.getAttribute('href')).toBe('https://example.com/license');
    expect(license?.getAttribute('hreflang')).toBe('en');
    expect(head.querySelector('link[rel="next"]')?.getAttribute('href')).toBe(
      '/next',
    );
    expect(head.querySelector('link[rel="prev"]')?.getAttribute('href')).toBe(
      '/prev',
    );
    const preloads = head.querySelectorAll('link[rel="preload"]');
    expect(preloads).toHaveLength(2);
    expect(preloads[0]?.getAttribute('href')).toBe('/img1.png');
    expect(preloads[0]?.getAttribute('as')).toBe('image');
    expect(preloads[1]?.getAttribute('href')).toBe('/img2.png');
  });
});
