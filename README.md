# 🧸 web-toybox

A collection of generic npm libraries for various apps.

## Features

- AI agent guidance with a Copilot-first compatibility layout
  ([GitHub Copilot canonical guide](.github/copilot-instructions.md),
  [OpenAI Codex adapter](AGENTS.md),
  [Claude Code adapter](CLAUDE.md),
  [strategy notes](docs/ai-strategy.md))
- PNPM
- TypeScript
- Biome
- Commitlint with Husky
- [Conventional Commits](https://www.conventionalcommits.org/)
- Visual Studio Code / Vim ready
- CI configurations
  - CodeRabbit
  - Dependabot
  - GitHub Actions

## System Requirements

- Node.js: Any of the following versions
  - Jod LTS (`^22.23.1`)
  - Krypton LTS (`^24.2.0`)
  - Latest (`>=26.0.0`)

## Development

### Install the dependencies

```sh
corepack enable
pnpm install
```

Node.js 25 and later no longer bundle Corepack; install it as a userland
package first (`npm install -g corepack@latest`) before running
`corepack enable`.

### Linting

```sh
pnpm run lint:fix # Lint and auto-fix
pnpm run lint # Verify
```

### Testing

```sh
pnpm run test
```

Currently, the command works as an alias for the `pnpm run lint` command.

### Cleaning

```sh
pnpm run clean
```

## Contributing

Welcome to contribute to this repository! For more details,
please refer to [CONTRIBUTING.md](.github/CONTRIBUTING.md).

## License

[MIT](./LICENSE)
