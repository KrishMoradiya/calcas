import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import prettierConfig from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: { React: 'writable' } } },
  pluginJs.configs.recommended,
  pluginReactConfig,
  prettierConfig,
  {
    env: {
      browser: true,
      node: true,
      jest: true,
    },
    rules: {
      // Possible Errors
      'no-console': 'warn',
      'no-debugger': 'warn',

      // Best Practices
      eqeqeq: 'error',
      curly: 'error',
      'no-else-return': 'warn',
      'no-empty-function': 'warn',
      'no-multi-spaces': 'error',
      'no-unused-vars': [
        'warn',
        { args: 'none', ignoreRestSiblings: true, varsIgnorePattern: 'React' },
      ],

      // Variables
      'no-undef': 'error',
      'no-use-before-define': 'error',

      // Stylistic Issues
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': 'error',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      camelcase: ['error', { properties: 'never' }],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'eol-last': 'error',
      indent: ['error', 2, { SwitchCase: 1 }],
      'jsx-quotes': ['error', 'prefer-double'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': 'error',
      'object-curly-spacing': ['error', 'always'],
      quotes: [
        'warn',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      semi: ['error', 'always'],
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],

      // React-specific rules
      'react/prop-types': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',

      // Prettier integration
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          jsxSingleQuote: false,
          semi: true,
          trailingComma: 'all',
          bracketSpacing: true,
          arrowParens: 'avoid',
        },
      ],
    },
    plugins: {
      prettier: pluginPrettier,
    },
  },
];
