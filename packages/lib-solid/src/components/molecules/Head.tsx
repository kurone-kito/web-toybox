import type { Component } from 'solid-js';
import { Show, splitProps } from 'solid-js';
import type { Except } from 'type-fest';
import type { LinkListProps } from '../atoms/meta/LinkList.js';
import { LinkList } from '../atoms/meta/LinkList.js';
import type { MetaListProps } from '../atoms/meta/MetaList.js';
import { MetaList } from '../atoms/meta/MetaList.js';
import type { OgpProps } from '../atoms/meta/Ogp.js';
import { Ogp } from '../atoms/meta/Ogp.js';
import type { TitleProps } from '../atoms/meta/Title.js';
import { Title } from '../atoms/meta/Title.js';
import type { XCardProps } from '../atoms/meta/XCard.js';
import { XCard } from '../atoms/meta/XCard.js';

/** Type definition for the properties. */
export interface HeadProps
  extends LinkListProps,
    MetaListProps,
    OgpProps,
    TitleProps,
    Except<XCardProps, 'image'> {}

/**
 * The head metadata component.
 * @param props The properties.
 * @returns The component.
 * @example
 * ```tsx
 * <Head
 *   author="John Doe"
 *   colorDark="#000000"
 *   colorLight="#FFFFFF"
 *   description="This is a sample description."
 *   images={['https://example.com/image.png']}
 *   links={[
 *     { rel: 'icon', href: '/favicon.ico' },
 *     { rel: 'stylesheet', href: 'https://example.com/styles.css' },
 *   ]}
 *   keywords="sample, meta, tags"
 *   siteName="Example Site"
 *   title="Sample Page"
 *   type="website"
 *   url="https://example.com/page"
 * />
 * ```
 */
export const Head: Component<HeadProps> = (props) => {
  const [local, rest] = splitProps(props, ['images']);
  return (
    <>
      <Title {...rest} />
      <MetaList {...rest} />
      <Ogp images={local.images} {...rest} />
      <Show fallback={<XCard {...rest} />} when={local.images?.[0]}>
        {(images) => <XCard image={images()} {...rest} />}
      </Show>
      <LinkList {...rest} />
    </>
  );
};
