[**@kurone-kito/web-toybox**](../README.md)

***

[@kurone-kito/web-toybox](../globals.md) / VariableLengthTuple

# Type Alias: VariableLengthTuple\<T, N\>

> **VariableLengthTuple**\<`T`, `N`\> = readonly \[`...TupleOf<N, T>`, `...T[]`\]

type definition of variable-length tuples with a minimum number of
length guaranteed

## Type Parameters

### T

`T`

the type of the tuple elements

### N

`N` *extends* `number`

the minimum number of the tuple length

## Example

```ts
type Example = VariableLengthTuple<number, 2>;
const example1: Example = [1, 2]; // valid
const example2: Example = [1, 2, 3, 4]; // valid
const example3: Example = [1]; // invalid
```
