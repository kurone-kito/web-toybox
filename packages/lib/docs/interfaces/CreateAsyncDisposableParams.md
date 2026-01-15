[**@kurone-kito/web-toybox**](../README.md)

***

[@kurone-kito/web-toybox](../globals.md) / CreateAsyncDisposableParams

# Interface: CreateAsyncDisposableParams\<T\>

Type definition for async disposable resource.

## Type Parameters

### T

`T` *extends* `NonNullable`\<`unknown`\>

The resource type.

## Properties

### create()

> **create**: () => `Promisable`\<`T`\>

Function to create the resource.

#### Returns

`Promisable`\<`T`\>

***

### dispose()

> **dispose**: (`resource`) => `unknown`

Function to dispose of the resource.

#### Parameters

##### resource

`T`

#### Returns

`unknown`
