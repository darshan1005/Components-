export var roots = ['<rootDir>/src'];
export var testMatch = ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'];
export var transform = {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
};
export var moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node'];
export var setupFilesAfterEnv = ['<rootDir>/src/setupTests.ts'];
export var testEvironment = 'jsdom';
