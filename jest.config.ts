/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  testPathIgnorePatterns: ['/node_modules/'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 40,
      functions: 40,
      lines: 40,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/src/assets/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    // '^.+\\.module\\.(css|less)$': 'identity-obj-proxy',
    // '\\.(css|less)$': 'identity-obj-proxy',
    '^.+\\.module\\.(css|less)$': 'identity-obj-proxy', // <-- CSS-модули
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js', //
  },
  reporters: [
    'default', // стандартный — полный вывод с ошибками
    '<rootDir>/failedReporter.js', // наш — список в конце
  ],
};

export default config;
