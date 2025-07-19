[**@kurone-kito/web-toybox-solid**](../README.md)

***

[@kurone-kito/web-toybox-solid](../globals.md) / HeadProps

# Interface: HeadProps

Type definition for the properties.

## Extends

- [`LinkListProps`](LinkListProps.md).[`MetaListProps`](MetaListProps.md).[`OgpProps`](OgpProps.md).[`TitleProps`](TitleProps.md).`Except`\<[`XCardProps`](XCardProps.md), `"image"`\>

## Properties

### author?

> `readonly` `optional` **author**: `string`

The author of the meta tag.

#### Inherited from

[`MetaListProps`](MetaListProps.md).[`author`](MetaListProps.md#author)

***

### authorUrl?

> `readonly` `optional` **authorUrl**: `string`

The author URL.

#### Inherited from

[`LinkListProps`](LinkListProps.md).[`authorUrl`](LinkListProps.md#authorurl)

***

### colorDark?

> `readonly` `optional` **colorDark**: `string`

The color of the meta tag on the dark mode.

#### Inherited from

[`MetaListProps`](MetaListProps.md).[`colorDark`](MetaListProps.md#colordark)

***

### colorLight?

> `readonly` `optional` **colorLight**: `string`

The color of the meta tag on the light mode.

#### Inherited from

[`MetaListProps`](MetaListProps.md).[`colorLight`](MetaListProps.md#colorlight)

***

### description?

> `readonly` `optional` **description**: `string`

The description of the meta tag.

#### Inherited from

[`MetaListProps`](MetaListProps.md).[`description`](MetaListProps.md#description)

***

### faviconType?

> `readonly` `optional` **faviconType**: `string`

The mime type of the favicon.

#### Inherited from

[`LinkListProps`](LinkListProps.md).[`faviconType`](LinkListProps.md#favicontype)

***

### faviconUrl?

> `readonly` `optional` **faviconUrl**: `string`

The favicon URL.

#### Inherited from

[`LinkListProps`](LinkListProps.md).[`faviconUrl`](LinkListProps.md#faviconurl)

***

### imageAlt?

> `readonly` `optional` **imageAlt**: `string`

The alt text of the images.

#### Inherited from

[`OgpProps`](OgpProps.md).[`imageAlt`](OgpProps.md#imagealt)

***

### imageHeight?

> `readonly` `optional` **imageHeight**: `string` \| `number`

The height of the images.

#### Inherited from

[`OgpProps`](OgpProps.md).[`imageHeight`](OgpProps.md#imageheight)

***

### images?

> `readonly` `optional` **images**: readonly `string`[]

The image URLs of the page.

#### Inherited from

[`OgpProps`](OgpProps.md).[`images`](OgpProps.md#images)

***

### imageType?

> `readonly` `optional` **imageType**: `string`

The mime type of the images.

#### Inherited from

[`OgpProps`](OgpProps.md).[`imageType`](OgpProps.md#imagetype)

***

### imageWidth?

> `readonly` `optional` **imageWidth**: `string` \| `number`

The width of the images.

#### Inherited from

[`OgpProps`](OgpProps.md).[`imageWidth`](OgpProps.md#imagewidth)

***

### keywords?

> `readonly` `optional` **keywords**: `string`

The keywords of the meta tag.

#### Inherited from

[`MetaListProps`](MetaListProps.md).[`keywords`](MetaListProps.md#keywords)

***

### language?

> `readonly` `optional` **language**: `string`

The language of the page.

#### Inherited from

[`OgpProps`](OgpProps.md).[`language`](OgpProps.md#language)

***

### licenseUrl?

> `readonly` `optional` **licenseUrl**: `string`

The license URL.

#### Inherited from

[`LinkListProps`](LinkListProps.md).[`licenseUrl`](LinkListProps.md#licenseurl)

***

### next?

> `readonly` `optional` **next**: `string`

The next page URL.

#### Inherited from

[`LinkListProps`](LinkListProps.md).[`next`](LinkListProps.md#next)

***

### preloadImages?

> `readonly` `optional` **preloadImages**: readonly `string`[]

The images to preload.

#### Inherited from

[`LinkListProps`](LinkListProps.md).[`preloadImages`](LinkListProps.md#preloadimages)

***

### prev?

> `readonly` `optional` **prev**: `string`

The previous page URL.

#### Inherited from

[`LinkListProps`](LinkListProps.md).[`prev`](LinkListProps.md#prev)

***

### robots?

> `readonly` `optional` **robots**: readonly [`Robots`](../type-aliases/Robots.md)[]

#### Inherited from

[`MetaListProps`](MetaListProps.md).[`robots`](MetaListProps.md#robots)

***

### siteName

> `readonly` **siteName**: `string`

The site name.

#### Inherited from

[`OgpProps`](OgpProps.md).[`siteName`](OgpProps.md#sitename)

***

### title?

> `readonly` `optional` **title**: `string`

The title of the page.

#### Inherited from

[`OgpProps`](OgpProps.md).[`title`](OgpProps.md#title)

***

### url?

> `readonly` `optional` **url**: `string`

The URL of the page.

#### Inherited from

[`OgpProps`](OgpProps.md).[`url`](OgpProps.md#url)
