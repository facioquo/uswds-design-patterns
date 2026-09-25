# Idea book: design patterns for U.S. Web Design System (USWDS) sites

[uswds.facioquo.com](https://uswds.facioquo.com)

[![website screenshot](/src/assets/images/social-card.png)](https://uswds.facioquo.com)

A website demonstrating design patterns for [U.S. Web Design System](https://designsystem.digital.gov) (USWDS). Each pattern is a separate site page with its own isolated HTML, Sass stylesheet, and TypeScript files, making its implementation easy to see and reuse.

While this site is built with the Angular framework, the source code is abstracted in a way that it is easily transposed to any other web development framework. Links to the GitHub code folder for each design pattern are at the bottom of each pattern page.

All design patterns are listed on the [uswds.facioquo.com](https://uswds.facioquo.com) home page.

**Don't see a good design pattern?** [Submit a request](https://github.com/facioquo/uswds-design-patterns/issues/new/choose) or [contribute](https://github.com/facioquo/.github/blob/main/CONTRIBUTING.md) some code.

## Getting started with local development

Install Node.js 24.15 or later in the Node 24 release line and pnpm 12, then install the locked dependencies:

```bash
# Install packages and start the local site.
pnpm install
pnpm run e2e:install
pnpm start
```

## Testing

This project uses Vitest for unit/component tests and Playwright for end-to-end tests.

Unit tests (Vitest):

```bash
pnpm test          # run once
pnpm run test:watch
pnpm run test:coverage
```

End-to-end tests (Playwright):

```bash
pnpm run e2e           # headless on Chromium/Firefox/WebKit
pnpm run e2e:headed    # headed browsers
pnpm run e2e:ui        # Playwright test UI
pnpm run e2e:report    # open last HTML report
```

By default, e2e tests start a dev server at <http://localhost:4200>. You can also start the app yourself (`pnpm run start:test`) and reuse the server locally.

## USWDS integration

The primary Sass entry point is `sass/uswds-styles.scss`. It loads the project theme settings, the selected USWDS packages, and the shared site styles in that order. Individual design patterns keep their additional styles beside their Angular components.

Angular copies the USWDS images and fonts into the built site. Components that require interactive USWDS behavior import and initialize that behavior directly so it works when Angular creates or removes routed content.
