[**@kurone-kito/web-toybox**](../README.md)

***

[@kurone-kito/web-toybox](../globals.md) / CreateDisposableParams

# Interface: CreateDisposableParams\<T\>

Type definition for disposable resource.

## Type Parameters

### T

`T` *extends* `NonNullable`\<`unknown`\>

The resource type.

## Properties

### create()

> **create**: () => `T`

Function to create the resource.

#### Returns

`T`

***

### dispose()

> **dispose**: (`resource`) => `unknown`

Function to dispose of the resource.

#### Parameters

##### resource

`T`

#### Returns

`unknown`
