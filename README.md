# 📄 PNPM workspaces project template

## Features

- All features of
  [kurone-kito/pnpm-project-template](https://github.com/kurone-kito/pnpm-project-template)
- The workspaces support with [pnpm workspaces](https://pnpm.io/workspaces)

### Workspaces

| path                  | package name                           | description                                        |
| --------------------- | -------------------------------------- | -------------------------------------------------- |
| `/`                   | `@kurone-kito/pnpm-workspace-template` | Manage the monorepo workspace and linting.         |
| `/packages/cli`       | `@kurone-kito/pwt-cli`                 | A boilerplate for CLI applications.                |
| `/packages/lib`       | `@kurone-kito/pwt-lib`                 | A boilerplate for libraries.                       |
| `/packages/web-solid` | `@kurone-kito/pwt-web-solid`           | A boilerplate for web applications using Solid.js. |

## How to use this template

You can create a new project by using `degit` or the “Use this template”
button on GitHub.

```sh
npx degit kurone-kito/pnpm-workspace-template my-project
cd my-project
pnpm install
```

### Additional configurations

- Update `package.json` fields:
  - `name`: The name of your project.
  - `description`: A brief description of your project.
  - `author`: Your name or organization.
  - `license`: The license for your project (default is MIT).
  - `homepage`: The homepage URL for your project.
  - `repository`: The repository URL for your project.
  - `bugs`: The URL for reporting issues.
- Edit or remove `.github/CODEOWNERS` as needed.

### Usecase

When you want to create a non-monorepo project, you should use the
[pnpm-project-template](https://github.com/kurone-kito/pnpm-project-template).

## System Requirements

- Node.js: Any of the following versions
  - Iron LTS (`^20.18.x`)
  - Jod LTS (`^22.x.x`)
  - Krypton LTS (`^24.x.x`)
  - Latest (`>=25.x.x`)

Note that this template includes `.node-version`, `.nvmrc`, and
`.tool-versions` files with specific Node.js versions. These files
currently list `20.20.0`, so update them and this section as needed when
you start a new project.

## Development

### Install the dependencies

```sh
corepack enable
pnpm install
```

#### Configure `BASE_PATH`

Set up an `.env` file before building when deploying `packages/web-solid`
to a subdirectory such as GitHub Pages.

```sh
cp .env.example .env
# Edit .env and update BASE_PATH if needed
```

The default `.env.example` contains the following setting:

```bash
BASE_PATH=/pnpm-workspace-template
```

This value should match the subdirectory where the site is hosted.

### Building

```sh
pnpm run build
pnpm run dev # Build and watch for changes
pnpm run build:sea # Build the Single Executable Application(s)
```

### Linting

```sh
pnpm run lint
pnpm run lint:fix # Lint and auto-fix
```

### Testing

Run `pnpm run build` before executing the test commands.

```sh
pnpm run test  # Run unit tests
pnpm run test:e2e  # Run end-to-end tests
```

### Cleaning

```sh
pnpm run clean
```

## Contributing

Welcome to contribute to this repository! For more details,
please refer to [CONTRIBUTING.md](.github/CONTRIBUTING.md).

## License

[MIT](./LICENSE)
