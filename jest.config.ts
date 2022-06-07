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
    '^@utils(.*)$': '<rootDir>/src/common/utils$1',
    '^@styles(.*)$': '<rootDir>/src/common/styles$1',
    '^@types(.*)$': '<rootDir>/src/common/types$1',
    '^@icons(.*)$': '<rootDir>/src/common/icons$1',
    '^@constants(.*)$': '<rootDir>/src/common/constants$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@http(.*)$': '<rootDir>/src/http$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@routes(.*)$': '<rootDir>/src/routes$1',
    '^.+\\.(sass|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: [ 'enzyme-to-json/serializer' ],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    '\\.(png|svg)$': '<rootDir>/__mocks__/fileTransformer.js',
  },
})
