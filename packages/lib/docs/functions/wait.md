[**@kurone-kito/web-toybox**](../README.md)

***

[@kurone-kito/web-toybox](../globals.md) / wait

# Function: wait()

> **wait**(`ms`, `signal?`): `Promise`\<`void`\>

Wait for a specified amount of milliseconds. This can be cancelled using an AbortSignal.

## Parameters

### ms

`number`

Milliseconds to wait.

### signal?

`AbortSignal`

An optional AbortSignal to cancel the wait.

## Returns

`Promise`\<`void`\>

## Throws

If the operation is aborted.

## Example

```ts
import { wait } from '@web-toybox/lib/async';
const controller = new AbortController();
wait(5000, controller.signal).catch((err) => {
  if (err.name === 'AbortError') {
    console.log('Wait was aborted');
  } else {
    console.error(err);
  }
});
// To abort the wait
controller.abort();
```
