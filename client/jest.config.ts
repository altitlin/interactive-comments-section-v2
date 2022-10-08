import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => ({
  verbose: true,
  preset: 'ts-jest',
  roots: [ '<rootDir>/src' ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    'src/pages/**/*.{ts,tsx}',
    'src/http/**/*.ts',
    'src/ui-kit/**/*.{ts,tsx}',
    'src/common/utils/**/*.ts',
    '!**/node_modules/**',
  ],
  coverageReporters: [ 'lcov' ],
  setupFiles: [ '<rootDir>/setupJest.ts' ],
  testRegex: '\\.test\\.tsx?$',
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@features(.*)$': '<rootDir>/src/features$1',
    '^@lib(.*)$': '<rootDir>/src/lib$1',
    '^@navigation(.*)$': '<rootDir>/src/navigation$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^.+\\.(sass|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: [ 'enzyme-to-json/serializer' ],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    '\\.(png|svg)$': '<rootDir>/__mocks__/fileTransformer.js',
  },
})
