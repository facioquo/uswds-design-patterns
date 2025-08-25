/*
  Legacy ESLint configuration for Codacy.
  Our local tooling uses ESLint Flat Config (eslint.config.js), which Codacy's ESLint engine may not read yet.
  This file mirrors our flat config as closely as possible so Codacy analyzes with the same rules.
*/

// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ["dist/", "coverage/", "playwright-report/", "test-results/", "**/*.d.ts"],
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "@angular-eslint"],
      processor: "@angular-eslint/template/extract-inline-html",
      parserOptions: {
        // Enable type-aware rules
        project: true,
        tsconfigRootDir: __dirname,
      },
      extends: [
        "eslint:recommended",
        // TypeScript ESLint typed configs
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        // Angular ESLint rules for TS
        "plugin:@angular-eslint/recommended",
        // Disable formatting-related rules that conflict with Prettier
        "prettier",
      ],
      rules: {
        // TypeScript-focused preferences (match flat config)
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { prefer: "type-imports", fixStyle: "inline-type-imports", disallowTypeAnnotations: false }
        ],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }
        ],
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
        "@typescript-eslint/no-non-null-assertion": "warn",

        // General JS/TS code-style and safety
        curly: ["error", "all"],
        eqeqeq: ["error", "always"],
        "prefer-const": "error",
        "no-var": "error",
        "object-shorthand": ["error", "always"],
        "no-console": ["warn", { allow: ["warn", "error"] }],
        quotes: ["error", "double", { avoidEscape: true }],

        // Angular selectors (match flat config)
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
      },
    },
    {
      files: ["**/*.spec.ts", "**/__tests__/**/*.ts"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/unbound-method": "off",
      },
    },
    {
      files: ["**/*.html"],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility",
        "prettier",
      ],
      rules: {},
    },
  ],
};
