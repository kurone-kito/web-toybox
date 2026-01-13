[**@kurone-kito/web-toybox-solid**](../README.md)

***

[@kurone-kito/web-toybox-solid](../globals.md) / createTick

# Function: createTick()

> **createTick**(`params`): `void`

Creates a ticking mechanism that calls the provided callback at
specified intervals.

## Parameters

### params

[`CreateTickParams`](../interfaces/CreateTickParams.md)

The parameters for creating the tick.

## Returns

`void`

## Example

```ts
createTick({
  callback: () => console.log('Tick'),
  immediate: true,
  interval: 1000,
});
```
