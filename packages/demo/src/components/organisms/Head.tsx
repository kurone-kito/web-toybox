import { Head as InnerHead } from '@kurone-kito/web-toybox-solid';
import type { Component } from 'solid-js';

/**
 * The head metadata component.
 * @param props The properties.
 * @returns The component.
 */
export const Head: Component = () => (
  <InnerHead
    author="Kuroné Kito"
    authorUrl="https://kit.black/"
    description="A webapp demo of the web-toybox."
    keywords="demo,solid-start"
    language="en"
    siteName="web-toybox"
    url="https://kurone-kito.github.io/web-toybox/"
  />
);
