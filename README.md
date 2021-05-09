<div align="center">
  <img width="512" src="https://raw.githubusercontent.com/2n3g5c9/marcm-dev/main/src/assets/images/shape.png" alt="marcm-dev">
</div>

<h1 align="center">
  Tech notes with words and code
</h1>

<p align="center">
    <a href="#-getting-started">Getting Started</a>
    &nbsp; • &nbsp;
    <a href="#-techframeworks-used">Tech/frameworks used</a>
    &nbsp; • &nbsp;
    <a href="#-license">License</a>
</p>

<p align="center">
  <a href="https://github.com/2n3g5c9/marcm-dev/actions/workflows/ci.yml">
    <img src="https://github.com/2n3g5c9/marcm-dev/workflows/Continuous%20Integration/badge.svg" alt="ci-badge"/>
  </a>
  <a href="https://github.com/2n3g5c9/marcm-dev/actions/workflows/codeql-analysis.yml">
    <img src="https://github.com/2n3g5c9/marcm-dev/workflows/CodeQL/badge.svg" alt="codeql-badge"/>
  </a>
</p>

<p align="center">
  <a href="https://www.marcm.dev/">
    <img src="https://img.shields.io/website-up-down-green-red/https/marcm.dev.svg?label=marcm.dev" alt="up-down-badge"/>
  </a>
  <img src="https://img.shields.io/github/languages/count/2n3g5c9/marcm-dev.svg?style=flat" alt="languages-badge"/>
  <a href="./LICENSE"> 
    <img src="https://img.shields.io/github/license/2n3g5c9/marcm-dev" alt="license-badge">
  </a>
  <img src="https://img.shields.io/github/repo-size/2n3g5c9/marcm-dev" alt="repo-size-badge">
  <a href="https://github.com/2n3g5c9/marcm-dev/commits/main">
    <img src="https://img.shields.io/github/last-commit/2n3g5c9/marcm-dev" alt="last-commit-badge">
  </a>
</p>

## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/2n3g5c9/marcm-dev && cd marcm-dev
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
- [Google Analytics](https://analytics.google.com/): A web analytics service offered by Google that tracks and reports website traffic.

## 📃 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
