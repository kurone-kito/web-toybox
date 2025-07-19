[**@kurone-kito/web-toybox-solid**](../README.md)

***

[@kurone-kito/web-toybox-solid](../globals.md) / Head

# Variable: Head

> `const` **Head**: `Component`\<[`HeadProps`](../interfaces/HeadProps.md)\>

The head metadata component.

## Param

The properties.

## Returns

The component.

## Example

```tsx
<Head
  author="John Doe"
  colorDark="#000000"
  colorLight="#FFFFFF"
  description="This is a sample description."
  images={['https://example.com/image.png']}
  links={[
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://example.com/styles.css' },
  ]}
  keywords="sample, meta, tags"
  siteName="Example Site"
  title="Sample Page"
  type="website"
  url="https://example.com/page"
/>
```
