export default {
  // Use ts-jest for TypeScript files
  preset: "ts-jest",
  // Set the test environment
  testEnvironment: "node",
  // Configure ts-jest to use ESM and handle JSX
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: {
          jsx: "react-jsx", // Explicitly set JSX in tsconfig override
        },
      },
    ],
  },
  // Tell Jest to treat these files as ESM
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  // Optional: Modify module name mapper for path aliases if you use them
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
