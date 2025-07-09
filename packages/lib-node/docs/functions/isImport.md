[**@kurone-kito/web-toybox-node**](../README.md)

***

[@kurone-kito/web-toybox-node](../globals.md) / isImport

# Function: isImport()

> **isImport**(`url`): `boolean`

Determine if the current module is being imported or executed directly.

## Parameters

### url

`string`

Value of `import.meta.url` from the caller.

## Returns

`boolean`

`true` if the module is imported, `false` if executed directly.

## Example

```ts
// example.mts
import { isImport } from '@kurone-kito/web-toybox-node';
console.log(isImport(import.meta.url));
```
Running `node example.mts` will log `false`.
Importing `example.mts` in another module will log `true`.
