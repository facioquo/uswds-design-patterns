---
applyTo: "**/*.{ts,html,scss,md,json,yml,yaml}"
description: "Repo-specific code completion checklist extensions for uswds-design-patterns"
---

# Code completion refinements (uswds-design-patterns)

## Commands

- Package manager: npm (Node >= 22.17)
- Install: npm ci (preferred, if package-lock.json exists) otherwise npm install
- Lint: npm run lint
- Lint (fix): npm run lint:fix
- Build (dev): npm run build
- Build (prod): npm run build.prod
- Unit tests: npm test
- Unit tests (watch): npm run test:watch
- Coverage: npm run test:coverage
- E2E tests: npm run e2e
- E2E report: npm run e2e:report

## Policies

- Zero-warning policy: lint must pass without errors; warnings allowed but should be addressed before merge.
- Coverage thresholds (from jest.config.ts): branches 60%, functions 70%, lines 85%, statements 85%
- PR titles: Conventional but not enforced; prefer feat:, fix:, chore:, docs:, test:, refactor:
- Required CI checks: build, lint, unit tests, and e2e must pass locally before PR.

## Final verification (composite)

This is the local "green before done" sequence. It aborts on first failure.

```bash
# 0) Ensure correct Node/npm
node -v
npm -v

# 1) Install dependencies (prefer reproducible CI mode if lockfile exists)
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

# 2) Lint
npm run lint

# 3) Build (development config)
npm run build

# 4) Unit tests + coverage (fast summary artifacts in coverage/)
npm run test:coverage

# 5) E2E tests (Playwright will auto-start the dev server per config)
npm run e2e
```

## Documentation updates

- Update README.md if commands, minimum Node version, or scripts change.
- Cross-reference: package.json scripts, angular.json configurations, jest.config.ts, playwright.config.ts.
- Exclusions: none.
