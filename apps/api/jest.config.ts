/* eslint-disable */
export default {
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/api',
  setupFiles: ['<rootDir>/testing/setup-jest-env.ts'],
  setupFilesAfterEnv: ['<rootDir>/testing/setup-jest.ts'],
};
