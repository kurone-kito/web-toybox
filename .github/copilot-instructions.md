# Guidelines for AI Agents

This project is a common functions library and demo applications built with
Solid.js, organized as a monorepo using pnpm workspaces. When contributing
to this project, please adhere to the following guidelines:

- Please write comments in English.
- Use the `pnpm run lint:fix` command to ensure code style quality.
- If you have further considerations, uncertainties, or better suggestions,
  please point them out, even if they seem minor. When doing so, provide at
  least one recommended solution. If in Plan mode, please resolve all these
  points before starting implementation.

## Packages

| path                  | package name                        | description                                          |
| --------------------- | ----------------------------------- | ---------------------------------------------------- |
| `/`                   | `@kurone-kito/web-toybox-root`      | Manage the monorepo workspace and linting.           |
| `/packages/demo`      | `@kurone-kito/web-toybox-demo`      | A demo applications for Solid.js.                    |
| `/packages/lib`       | `@kurone-kito/web-toybox`           | Utils functions library for general apps.            |
| `/packages/lib-node`  | `@kurone-kito/web-toybox-lib-node`  | Utils functions library for Node.js apps.            |
| `/packages/lib-solid` | `@kurone-kito/web-toybox-lib-solid` | Utils functions and components library for Solid.js. |

## Development

### Install the dependencies

```sh
corepack enable
pnpm install
```

### Building

```sh
pnpm run build

# if you want to watch file changes
pnpm run dev

# to build a specific package
pnpm -F '@kurone-kito/web-toybox' run build
```

### Linting

```sh
pnpm run lint
pnpm run lint:fix # Lint and auto-fix
```

### Testing

```sh
pnpm run test
```

### Cleaning

```sh
pnpm run clean
```
