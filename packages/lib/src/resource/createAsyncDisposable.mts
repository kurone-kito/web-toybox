import type { Promisable } from 'type-fest';

/**
 * Type definition for async disposable resource.
 * @template T The resource type.
 */
export interface CreateAsyncDisposableParams<
  in out T extends NonNullable<unknown>,
> {
  /** Function to create the resource. */
  create: () => Promisable<T>;

  /** Function to dispose of the resource. */
  dispose: (resource: T) => Promisable<unknown>;
}

/**
 * Creates an async disposable resource with custom creation and disposal logic.
 * @template T The resource type.
 * @param params The parameters including create and dispose functions.
 * @returns The created resource augmented with an async dispose method.
 */
export const createAsyncDisposable = async <
  const T extends NonNullable<unknown>,
>(
  params: CreateAsyncDisposableParams<T>,
): Promise<T & Readonly<AsyncDisposable>> => {
  const { create, dispose } = params;
  let value: T | undefined;
  let orgDispose: (() => Promisable<void>) | undefined;
  const release = async () => {
    if (value != null) {
      await dispose(value);
      await orgDispose?.();
    }
    value = undefined;
  };
  try {
    value = await create();
    const found = (value as Record<symbol, unknown>)[Symbol.asyncDispose];
    orgDispose = typeof found === 'function' ? found.bind(value) : undefined;
    const disposable: Readonly<AsyncDisposable> = {
      [Symbol.asyncDispose]: release,
    };
    return Object.assign(value, disposable);
  } catch (error) {
    await release();
    throw error;
  }
};
