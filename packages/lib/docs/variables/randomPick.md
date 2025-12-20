[**@kurone-kito/web-toybox**](../README.md)

***

[@kurone-kito/web-toybox](../globals.md) / randomPick

# Variable: randomPick

> `const` **randomPick**: `RandomPick`

Pick a random item from a non-empty array.

## Param

Array of items to pick from.

## Returns

Randomly selected item.

## Example

```ts
const colors = ['red', 'green', 'blue'] as const;
const randomColor = randomPick(colors); // e.g., 'green'
```
