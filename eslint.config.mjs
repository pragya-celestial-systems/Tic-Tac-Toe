import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      // JavaScript rules
      "no-unused-vars": "warn",       // Warns on unused variables
      "no-console": "warn",           // Warns on console.log statements
      "eqeqeq": "error",              // Enforces strict equality (===)
      "curly": "error",               // Requires curly braces for control structures
      "semi": ["error", "always"],    // Enforces semicolons at the end of statements

      // React-specific rules
      "react/prop-types": "off",      // Disables prop-types as it's often redundant with TypeScript
      "react/react-in-jsx-scope": "off", // Disables the requirement of React in scope with modern JSX
      "react/jsx-uses-react": "off",  // Disables React usage warnings in JSX (for React 17+)
      "react/jsx-uses-vars": "error", // Ensures variables in JSX are used

      // Other rules
      "prefer-const": "warn",         // Suggests using const when variables are not reassigned
      "no-var": "error",              // Disallows var, encouraging let/const
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
