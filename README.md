> ⚠️ This project is no longer maintained.

<div align="center">
  <img width="512" src="https://raw.githubusercontent.com/2n3g5c9/notes-marcm-dev/main/src/assets/images/shape.png" alt="notes-marcm-dev">
</div>

<h1 align="center">
  Greetings to my not a blog 👋
</h1>

<p align="center">
  <a href="#-getting-started">Getting Started</a>
  &nbsp; • &nbsp;
  <a href="#-techframeworks-used">Tech/frameworks used</a>
  &nbsp; • &nbsp;
    <a href="#-license">License</a>
</p>

<p align="center">
  <a href="https://github.com/2n3g5c9/notes-marcm-dev/actions/workflows/ci.yml">
    <img src="https://github.com/2n3g5c9/notes-marcm-dev/workflows/CI/badge.svg" alt="ci-badge"/>
  </a>
  <a href="https://github.com/2n3g5c9/notes-marcm-dev/actions/workflows/codeql-analysis.yml">
    <img src="https://github.com/2n3g5c9/notes-marcm-dev/workflows/CodeQL/badge.svg" alt="codeql-badge"/>
  </a>
  <a href="https://sonarcloud.io/dashboard?id=2n3g5c9_notes-marcm-dev" target="_blank" rel="noopener noreferrer">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=2n3g5c9_notes-marcm-dev&metric=alert_status" alt="sonarcloud-badge"/>
  </a>
  <a href="https://depfu.com/github/2n3g5c9/notes-marcm-dev?project_id=24387" target="_blank" rel="noopener noreferrer">
    <img src="https://badges.depfu.com/badges/a2b37072995a8de2a954a43807b5fdac/overview.svg" alt="depfu-badge"/>
  </a>
</p>

<p align="center">
  <a href="https://notes.marcm.dev/" aria-label="notes-marcm-dev" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/website-up-down-green-red/https/notes.marcm.dev.svg?label=notes.marcm.dev" alt="up-down-badge"/>
  </a>
  <img src="https://img.shields.io/github/languages/count/2n3g5c9/notes-marcm-dev.svg?style=flat" alt="languages-badge"/>
  <a href="./LICENSE"> 
    <img src="https://img.shields.io/github/license/2n3g5c9/notes-marcm-dev" alt="license-badge">
  </a>
  <img src="https://img.shields.io/github/repo-size/2n3g5c9/notes-marcm-dev" alt="repo-size-badge">
  <a href="https://github.com/2n3g5c9/notes-marcm-dev/commits/main">
    <img src="https://img.shields.io/github/last-commit/2n3g5c9/notes-marcm-dev" alt="last-commit-badge">
  </a>
</p>

## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/2n3g5c9/notes-marcm-dev && cd notes-marcm-dev
```

2. Download the dependencies:

```bash
yarn install
```

3. If not present, generate the `font-preload-cache.json` file:

```bash
yarn preload-fonts
```

### Local tests

**Lint checks:**

```bash
yarn lint
```

**Type checks:**

```bash
yarn type-check
```

**Snapshot tests:**

```bash
yarn test
```

**Accessibility tests:**

To test in a Chrome browser:

```bash
yarn test:e2e
```

To test in an Electron headless browser:

```bash
yarn test:e2e:cli
```

### Run a development server

```bash
yarn develop
```

### Serve a local build

```bash
yarn build && yarn serve
```

## 🪄 Tech/frameworks used

- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript that compiles to plain JavaScript.
- [Gatsby](https://www.gatsbyjs.com/): Free and open source framework based on React that helps developers build blazing fast websites and apps.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.

## 📃 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
