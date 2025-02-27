export default {
  // Set the test environment
  testEnvironment: "node",
  // Configure ts-jest to use ESM and handle JSX
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
    ],
    // Don't transform MJS files - treat them as native ESM
    "^.+\\.mjs$": ["babel-jest", { configFile: './babel.config.js' }],
  },
  // Add transformIgnorePatterns to process ESM modules in node_modules
  transformIgnorePatterns: [
    "/node_modules/(?!.*\\.m?js$)",
  ],
};