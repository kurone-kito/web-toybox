[**@kurone-kito/web-toybox**](../README.md)

***

[@kurone-kito/web-toybox](../globals.md) / isVariableLengthTuple

# Function: isVariableLengthTuple()

> **isVariableLengthTuple**\<`T`, `N`\>(`value`, `length`): `value is readonly [If<IsAny<N>, T[], If<IsNever<N>, [], _TupleOf<If<IsNegative<N>, 0, N>, T, []>>>, T]`

determines if the specified argument is a variable-length tuple

## Type Parameters

### T

`T`

### N

`N` *extends* `number`

## Parameters

### value

readonly `T`[]

the value to check

### length

`N`

the minimum length of the tuple

## Returns

`value is readonly [If<IsAny<N>, T[], If<IsNever<N>, [], _TupleOf<If<IsNegative<N>, 0, N>, T, []>>>, T]`

`true` if the specified argument is a variable-length tuple

## Example

```ts
isVariableLengthTuple([1, 2, 3], 2); //=> true
isVariableLengthTuple([1], 2); //=> false
```
