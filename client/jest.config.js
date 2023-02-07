/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "@styles/(.*)": ["<rootDir>/src/styles/$1"],
    "@components/(.*)": ["<rootDir>/src/components/$1"],
    "@assets/(.*)": ["<rootDir>/src/assets/$1"],
    "@hooks/(.*)": ["<rootDir>/src/hooks/$1"],
    "@store/(.*)": ["<rootDir>/src/store/$1"],
    "@services/(.*)": ["<rootDir>/src/services/$1"],
    "@tests/(.*)": ["<rootDir>/src/tests/$1"],
  },
}
