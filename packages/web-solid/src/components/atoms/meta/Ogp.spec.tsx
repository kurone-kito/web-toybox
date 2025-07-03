import { MetaProvider } from '@solidjs/meta';
import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { Ogp } from './Ogp.js';

beforeEach(() => {
  document.head.innerHTML = '';
});
afterEach(() => {
  cleanup();
  document.head.innerHTML = '';
});

describe('Ogp', () => {
  it('renders ogp tags', () => {
    render(() => (
      <MetaProvider>
        <Ogp
          description="desc"
          imageAlt="alt"
          imageHeight={100}
          imageType="image/png"
          imageWidth={200}
          images={['/img1.png', '/img2.png']}
          language="en_US"
          siteName="Example"
          title="Title"
          url="https://example.com"
        />
      </MetaProvider>
    ));

    const head = document.head;
    expect(
      head
        .querySelector('meta[property="og:description"]')
        ?.getAttribute('content'),
    ).toBe('desc');
    const images = head.querySelectorAll('meta[property="og:image"]');
    expect(images).toHaveLength(2);
    expect(images[0]?.getAttribute('content')).toBe('/img1.png');
    expect(images[1]?.getAttribute('content')).toBe('/img2.png');
    expect(
      head
        .querySelector('meta[property="og:image:alt"]')
        ?.getAttribute('content'),
    ).toBe('alt');
    expect(
      head
        .querySelector('meta[property="og:image:height"]')
        ?.getAttribute('content'),
    ).toBe('100');
    expect(
      head
        .querySelector('meta[property="og:image:type"]')
        ?.getAttribute('content'),
    ).toBe('image/png');
    expect(
      head
        .querySelector('meta[property="og:image:width"]')
        ?.getAttribute('content'),
    ).toBe('200');
    expect(
      head.querySelector('meta[property="og:locale"]')?.getAttribute('content'),
    ).toBe('en_US');
    expect(
      head
        .querySelector('meta[property="og:site_name"]')
        ?.getAttribute('content'),
    ).toBe('Example');
    expect(
      head.querySelector('meta[property="og:title"]')?.getAttribute('content'),
    ).toBe('Title | Example');
    expect(
      head.querySelector('meta[property="og:type"]')?.getAttribute('content'),
    ).toBe('website');
    expect(
      head.querySelector('meta[property="og:url"]')?.getAttribute('content'),
    ).toBe('https://example.com');
  });
});
