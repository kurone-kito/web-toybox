import { Meta } from '@solidjs/meta';
import type { Component } from 'solid-js';
import { Match, Show, Switch } from 'solid-js';

/** Type definition for the properties. */
export interface MetaListProps {
  /** The author of the meta tag. */
  readonly author?: string | undefined;

  /** The color of the meta tag on the dark mode. */
  readonly colorDark?: string | undefined;

  /** The color of the meta tag on the light mode. */
  readonly colorLight?: string | undefined;

  /** The description of the meta tag. */
  readonly description?: string | undefined;

  /** The keywords of the meta tag. */
  readonly keywords?: string | undefined;

  readonly robots?: readonly Robots[] | undefined;
}

export type Robots =
  | 'all'
  | 'follow'
  | 'index'
  | 'indexifembedded'
  | `max-image-preview: ${'large' | 'none' | 'standard'}`
  | `max-snippet: ${number}`
  | `max-video-preview: ${number}`
  | 'noarchive'
  | 'nofollow'
  | 'noimageindex'
  | 'noindex'
  | 'none'
  | 'nosnippet'
  | 'notranslate'
  | `unavailable_after: ${string}`;

/**
 * The meta list component.
 * @param props The component properties.
 * @returns The component.
 * @example
 * ```tsx
 * <MetaList
 *   author="John Doe"
 *   colorDark="#000000"
 *   colorLight="#FFFFFF"
 *   description="This is a sample description."
 *   keywords="sample, meta, tags"
 * />
 * ```
 */
export const MetaList: Component<MetaListProps> = (props) => (
  <>
    <Show when={props.author}>
      <Meta name="author" content={props.author} />
    </Show>
    <Switch>
      <Match when={props.colorDark && props.colorLight}>
        <Meta name="color-scheme" content="light dark" />
      </Match>
      <Match when={props.colorDark && !props.colorLight}>
        <Meta name="color-scheme" content="dark" />
      </Match>
      <Match when={!props.colorDark && props.colorLight}>
        <Meta name="color-scheme" content="light" />
      </Match>
    </Switch>
    <Show when={props.description}>
      <Meta name="description" content={props.description} />
    </Show>
    <Meta name="generator" content="SolidStart" />
    <Show when={props.keywords}>
      <Meta name="keywords" content={props.keywords} />
    </Show>
    <Meta name="referer" content="strict-origin-when-cross-origin" />
    <Show when={props.robots?.length}>
      <Meta name="robots" content={props.robots?.join(', ')} />
    </Show>
    <Show when={props.colorLight}>
      <Meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content={props.colorLight}
      />
    </Show>
    <Show when={props.colorDark}>
      <Meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content={props.colorDark}
      />
    </Show>
    <Meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
  </>
);
