import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  // Use the environment provided by jest-preset-angular
  testEnvironment: 'jest-preset-angular/environments/jest-jsdom-env',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['**/__tests__/**/*.spec.ts', '**/?(*.)+(spec).ts'],
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
  transform: {
    '^.+\\.(ts|mjs|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  '\\.(css|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/main.ts',
    '!src/**/*.module.ts',
    '!src/**/*.routing.ts',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json-summary', 'text', 'lcov', 'json'],
  coverageThreshold: {
    global: {
  branches: 60,
  functions: 70,
  lines: 85,
  statements: 85,
    },
  },
};

export default config;
