import type { RouteSectionProps } from '@solidjs/router';
import type { Component } from 'solid-js';

/**
 * The top page.
 * @returns The component.
 */
const Index: Component<Partial<RouteSectionProps>> = () => (
  <article class="flex gap-2 items-center">
    <i class="vrc-icon-Document" />
    <h1>Hello, world!</h1>
  </article>
);

export default Index;
