[**@kurone-kito/web-toybox**](../README.md)

***

[@kurone-kito/web-toybox](../globals.md) / chunkAsync

# Function: chunkAsync()

> **chunkAsync**\<`T`\>(`iterable`, `size`): `AsyncIterable`\<readonly `T`[]\>

Chunks an async iterable into smaller async iterables of a specified
size.

## Type Parameters

### T

`T` *extends* `unknown`

The type of elements in the async iterable.

## Parameters

### iterable

`AsyncIterable`\<`T`\>

The async iterable to chunk.

### size

`number`

The size of each chunk.

## Returns

`AsyncIterable`\<readonly `T`[]\>

An async iterable of chunks.

## Example

```ts
const asyncIterable = (async function* () {
  for (let i = 1; i <= 10; i++) {
    yield i;
  }
})();

const chunked = chunkAsync(asyncIterable, 3);

for await (const chunk of chunked) {
  console.log(chunk);
}
// Output:
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]
// [10]
```
