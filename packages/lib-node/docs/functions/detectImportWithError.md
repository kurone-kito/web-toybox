[**@kurone-kito/web-toybox-node**](../README.md)

***

[@kurone-kito/web-toybox-node](../globals.md) / detectImportWithError

# Function: detectImportWithError()

> **detectImportWithError**(`url`): `void`

Throw an error if the current module is being imported.

## Parameters

### url

`string`

Value of `import.meta.url` from the caller.

## Returns

`void`

## Throws

Error if the module is imported.

## Example

```ts
// example.mts
import { detectImportWithError } from '@kurone-kito/web-toybox-node';
detectImportWithError(import.meta.url);
console.log('This line will only run if the module is executed directly.');
```
Running `node example.mts` will log the message.
Importing `example.mts` in another module will throw an error.
