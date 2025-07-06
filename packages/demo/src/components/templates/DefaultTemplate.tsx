import { MetaProvider } from '@solidjs/meta';
import type { RouteSectionProps } from '@solidjs/router';
import type { Component } from 'solid-js';
import { Suspense } from 'solid-js';
import { Head } from '../organisms/Head.js';

/**
 * The default template component.
 * @param props The properties.
 * @returns The component.
 */
export const DefaultTemplate: Component<RouteSectionProps> = (props) => (
  <MetaProvider>
    <Head />
    <Suspense>
      <main>{props.children}</main>
    </Suspense>
  </MetaProvider>
);
