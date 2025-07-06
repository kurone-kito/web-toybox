import { MetaProvider } from '@solidjs/meta';
import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it } from 'vitest';
import { Head } from './Head.js';

afterEach(() => {
  cleanup();
  document.head.innerHTML = '';
});

describe('Head', () => {
  it('renders meta information', () => {
    render(() => (
      <MetaProvider>
        <Head
          siteName="Example"
          title="Page"
          description="desc"
          images={['/img.png']}
        />
      </MetaProvider>
    ));
    expect(document.head.querySelector('title')?.textContent).toBe(
      'Page :: Example',
    );
    expect(
      document.head
        .querySelector('meta[property="og:image"]')
        ?.getAttribute('content'),
    ).toBe('/img.png');
    expect(
      document.head
        .querySelector('meta[name="twitter:title"]')
        ?.getAttribute('content'),
    ).toBe('Page | Example');
  });
});
