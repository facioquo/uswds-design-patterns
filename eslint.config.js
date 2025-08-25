// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");
const jsonc = require("eslint-plugin-jsonc");
const jsoncParser = require("jsonc-eslint-parser");

module.exports = tseslint.config(
  // Global ignores to keep ESLint focused on source and tests only
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "coverage/**",
      "playwright-report/**",
      "test-results/**",
      "**/*.scss",
      "sass/**",
      "src/assets/**",
      "public/**",
    ],
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...angular.configs.tsRecommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      // Naming convention: ignore quoted property keys (e.g., regex-like keys in config files)
      // Ref: https://typescript-eslint.io/rules/naming-convention/
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "property",
          modifiers: ["requiresQuotes"],
          format: null,
        },
      ],
      // TypeScript-focused preferences
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports", disallowTypeAnnotations: false },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
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
  // Turn off all ESLint rules that conflict with Prettier formatting
  {
    files: ["**/*.{ts,js,html}"],
    extends: [eslintConfigPrettier],
  },
  // Relax selected rules in test specs to reduce friction while keeping production code strict
  {
    files: ["**/*.spec.ts", "**/__tests__/**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/unbound-method": "off",
    },
  },
  // Enforce JSON style in VS Code settings: multiline arrays for readability
  {
    files: [".vscode/**/*.json", ".vscode/**/*.jsonc"],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: { jsonc },
    rules: {
      "jsonc/array-element-newline": ["error", "always"],
      "jsonc/array-bracket-newline": ["error", "always"],
    },
  },
  // Setup file: allow lightweight mocks and any usage
  {
    files: ["setup-jest.ts"],
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
    },
  },
  {
    files: ["**/*.html"],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  }
);
