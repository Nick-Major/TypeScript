import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.jest, ...globals.node } },
  ignores: [
    'node_modules/',
    '**/node_modules/',
    '/**/node_modules/*',
    'out/',
    'dist/',
    'build/',
  ]},
  pluginJs.configs.recommended,
  ...tseslint.config({
    rules: {
      "@typescript-eslint/no-require-imports": "off"
    }
  }),
];