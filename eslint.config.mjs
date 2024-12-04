import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
    },
  },
  {
    languageOptions: { globals: globals.node }
  },
  pluginJs.configs.recommended,
];
