import path from 'path'
import { fileURLToPath } from 'url'
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import * as tseslint from 'typescript-eslint'
import * as vitestPlugin from '@vitest/eslint-plugin'
import testingLibrary from 'eslint-plugin-testing-library'
import jestPlugin from 'eslint-plugin-jest'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      'dist/**',
      'node_modules/**',
      'pnpm-lock.yaml',
      'eslint.config.js',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: path.resolve(__dirname, './tsconfig.eslint.json'),
      },
      globals: {
        ...globals.browser,
        ...(vitestPlugin.environments?.['vitest-globals']?.globals || {}),
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      vitest: vitestPlugin,
      'testing-library': testingLibrary,
      jest: jestPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...(vitestPlugin.configs?.recommended?.rules || {}),
      ...testingLibrary.configs.react.rules,
      ...jestPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    languageOptions: {
      globals: globals.jest,
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
    },
  },
]
