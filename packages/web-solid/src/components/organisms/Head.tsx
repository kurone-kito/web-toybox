import type { Component } from 'solid-js';
import { Head as InnerHead } from '../molecules/Head.js';

/**
 * The head metadata component.
 * @param props The properties.
 * @returns The component.
 */
export const Head: Component = () => (
  <InnerHead
    author="Kuroné Kito"
    authorUrl="https://kit.black/"
    description="A webapp template of the pnpm workspaces using SolidStart."
    keywords="pnpm, pnpm-workspace, template, webapp, solid-start"
    language="en"
    siteName="pnpm-workspace-template"
    url="https://kurone-kito.github.io/pnpm-workspace-template/"
  />
);
