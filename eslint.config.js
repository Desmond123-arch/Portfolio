//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  ...tanstackConfig,
  {
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },
  prettierRecommended,
];
