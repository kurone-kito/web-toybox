# ⚙️ Web ToyBox

![GitHub package.json version](https://img.shields.io/github/package-json/v/kurone-kito/web-toybox)

Common functions for web applications

## Features

- `packages/demo`: Web demo using Solid.js
- ![NPM Downloads](https://img.shields.io/npm/dy/%40kurone-kito%2Fweb-toybox)
  `packages/lib`: Common functions library for general applications
- ![NPM Downloads](https://img.shields.io/npm/dy/%40kurone-kito%2Fweb-toybox-node)
  `packages/lib-node`: Common functions library for Node.js applications
- ![NPM Downloads](https://img.shields.io/npm/dy/%40kurone-kito%2Fweb-toybox-solid)
  `packages/lib-solid`: Common functions and components library for Solid.js web
  applications

## System Requirements

- Node.js: Any of the following versions
  - Iron LTS (`^20.18.x`)
  - Jod LTS (`^22.x.x`)
  - Krypton LTS (`^24.x.x`)
  - Latest (`>=25.x.x`)

## Development

### Install the dependencies

```sh
corepack enable
pnpm install
```

### Building

```sh
pnpm run build
pnpm run dev # Build and watch for changes
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
