# ⚙️ Web ToyBox (Solid)

![NPM Version](https://img.shields.io/npm/v/%40kurone-kito%2Fweb-toybox-solid)
![Node Current](https://img.shields.io/node/v/%40kurone-kito%2Fweb-toybox-solid)
![NPM Last Update](https://img.shields.io/npm/last-update/%40kurone-kito%2Fweb-toybox-solid)
![NPM Downloads](https://img.shields.io/npm/dy/%40kurone-kito%2Fweb-toybox-solid)
![npms.io](https://img.shields.io/npms-io/final-score/%40kurone-kito/web-toybox-solid)

Common functions and component library for Solid.js web applications

## Installation

```bash
pnpm add @kurone-kito/web-toybox-solid @solidjs/meta solid-js
```

## Basic usage

Use the bundled `MetaProvider` to ensure the same `@solidjs/meta` instance
is shared with the head components.

```tsx
import { MetaProvider, Head } from '@kurone-kito/web-toybox-solid';

export const App = () => (
 <MetaProvider>
  <Head
   siteName="Example Site"
   title="Sample Page"
   description="This is a sample description."
   images={["https://example.com/image.png"]}
   author="John Doe"
  />
  {/* ...the rest of your app... */}
 </MetaProvider>
);
```

## LICENSE

MIT
