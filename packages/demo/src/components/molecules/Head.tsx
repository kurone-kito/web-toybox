import type {
  LinkListProps,
  MetaListProps,
  OgpProps,
  TitleProps,
  XCardProps,
} from '@kurone-kito/web-toybox-solid';
import {
  LinkList,
  MetaList,
  Ogp,
  Title,
  XCard,
} from '@kurone-kito/web-toybox-solid';
import type { Component } from 'solid-js';
import { Show, splitProps } from 'solid-js';
import type { Except } from 'type-fest';

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
