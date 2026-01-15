[**@kurone-kito/web-toybox**](../README.md)

***

[@kurone-kito/web-toybox](../globals.md) / createDisposable

# Function: createDisposable()

> **createDisposable**\<`T`\>(`params`): `T` & `Readonly`\<`Disposable`\>

Creates a disposable resource with custom creation and disposal logic.

## Type Parameters

### T

`T` *extends* `object`

The resource type.

## Parameters

### params

[`CreateDisposableParams`](../interfaces/CreateDisposableParams.md)\<`T`\>

The parameters including create and dispose functions.

## Returns

`T` & `Readonly`\<`Disposable`\>

The created resource augmented with a dispose method.
