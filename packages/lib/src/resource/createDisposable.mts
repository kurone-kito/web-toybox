/**
 * Type definition for disposable resource.
 * @template T The resource type.
 */
export interface CreateDisposableParams<in out T extends NonNullable<unknown>> {
  /** Function to create the resource. */
  create: () => T;

  /** Function to dispose of the resource. */
  dispose: (resource: T) => unknown;
}

/**
 * Creates a disposable resource with custom creation and disposal logic.
 * @template T The resource type.
 * @param params The parameters including create and dispose functions.
 * @returns The created resource augmented with a dispose method.
 */
export const createDisposable = <const T extends NonNullable<unknown>>(
  params: CreateDisposableParams<T>,
): T & Readonly<Disposable> => {
  const { create, dispose } = params;
  let value: T | undefined;
  let orgDispose: (() => void) | undefined;
  const release = () => {
    if (value != null) {
      dispose(value);
      orgDispose?.();
    }
    value = undefined;
  };
  try {
    value = create();
    const found = (value as Record<symbol, unknown>)[Symbol.dispose];
    orgDispose = typeof found === 'function' ? found.bind(value) : undefined;
    const disposable: Readonly<Disposable> = { [Symbol.dispose]: release };
    return Object.assign(value, disposable);
  } catch (error) {
    release();
    throw error;
  }
};
