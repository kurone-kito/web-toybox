[**@kurone-kito/web-toybox**](../README.md)

***

[@kurone-kito/web-toybox](../globals.md) / createAsyncDisposable

# Function: createAsyncDisposable()

> **createAsyncDisposable**\<`T`\>(`params`): `Promise`\<`T` & `Readonly`\<`AsyncDisposable`\>\>

Creates an async disposable resource with custom creation and disposal logic.

## Type Parameters

### T

`T` *extends* `object`

The resource type.

## Parameters

### params

[`CreateAsyncDisposableParams`](../interfaces/CreateAsyncDisposableParams.md)\<`T`\>

The parameters including create and dispose functions.

## Returns

`Promise`\<`T` & `Readonly`\<`AsyncDisposable`\>\>

The created resource augmented with an async dispose method.
