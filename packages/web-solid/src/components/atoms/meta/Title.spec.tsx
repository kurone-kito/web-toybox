import { MetaProvider } from '@solidjs/meta';
import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { Title } from './Title.js';

beforeEach(() => {
  document.head.innerHTML = '';
});
afterEach(() => {
  cleanup();
  document.head.innerHTML = '';
});

describe('Title', () => {
  it('renders the title with site name', () => {
    render(() => (
      <MetaProvider>
        <Title siteName="Example" title="Page" />
      </MetaProvider>
    ));
    const titleTag = document.head.querySelector('title');
    expect(titleTag?.textContent).toBe('Page :: Example');
  });
});
