import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: react.configs.recommended.rules,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...react.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: ["node_modules/", "dist/", "pnpm-lock.yaml"],
  }
);
