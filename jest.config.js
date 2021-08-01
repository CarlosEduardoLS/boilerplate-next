module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  colllectCoverageFrom: ['src/**/*.ts(x))'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
