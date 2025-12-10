[**@kurone-kito/web-toybox-solid**](../README.md)

***

[@kurone-kito/web-toybox-solid](../globals.md) / AccessorObject

# Type Alias: AccessorObject\<T, K\>

> **AccessorObject**\<`T`, `K`\> = `Simplify`\<`{ readonly [P in K]: Accessor<T> }` & `` { readonly [P in K as `set${Capitalize<P>}`]: Setter<T> } ``\>

Type definition for an object with accessor and setter properties.

## Type Parameters

### T

`T`

The type of the accessor and setter values.

### K

`K` *extends* `string`

The keys of the object.

## Example

```ts
type UserAccessorObject = AccessorObject<User, 'name' | 'age'>;

const user: UserAccessorObject = {
  name: () => 'Alice',
  setName: (newName) => { ... },
  age: () => 42,
  setAge: (newAge) => { ... },
};
```
