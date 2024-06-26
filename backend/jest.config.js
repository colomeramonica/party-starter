module.exports = {
  clearMocks: true,
  coverageDirectory: "tests/coverage",
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.spec.ts"],
};