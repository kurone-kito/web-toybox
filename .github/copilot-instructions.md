# Guidelines for AI Agents

This project is a generic Node.js workspace template using pnpm.

- Please write comments in English.
- Use the `pnpm run lint:fix` command to ensure code style quality.
- If you have further considerations, uncertainties, or better suggestions,
  please point them out, even if they seem minor. When doing so, provide at
  least one recommended solution. If in Plan mode, please resolve all these
  points before starting implementation.

## Packages

| path                  | package name                           | description                                        |
| --------------------- | -------------------------------------- | -------------------------------------------------- |
| `/`                   | `@kurone-kito/pnpm-workspace-template` | Manage the monorepo workspace and linting.         |
| `/packages/cli`       | `@kurone-kito/pwt-cli`                 | A boilerplate for CLI applications.                |
| `/packages/lib`       | `@kurone-kito/pwt-lib`                 | A boilerplate for libraries.                       |
| `/packages/web-solid` | `@kurone-kito/pwt-web-solid`           | A boilerplate for web applications using Solid.js. |

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
pnpm -F '@kurone-kito/pwt-lib' run build
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
