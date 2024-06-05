export const roots = ['<rootDir>/src'];
export const testMatch = ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'];
export const transform = {
  '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
};
export const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node'];
export const setupFilesAfterEnv = ['<rootDir>/src/setupTests.ts'];
export const testEvironment = 'jsdom'
