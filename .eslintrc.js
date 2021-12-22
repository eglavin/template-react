/**
 * https://eslint.org/docs/user-guide
 */

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },

  ignorePatterns: ['/node_modules', '*.test.*.snap'],

  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier', '@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],

  /**
   * https://eslint.org/docs/user-guide/configuring/rules#configuring-rules
   *
   * "off" or 0 - turn the rule off
   * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
   * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
   */
  rules: {
    'no-console': 0,
    'no-constant-condition': 1,

    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,

    'no-empty-function': 1,
    '@typescript-eslint/no-empty-function': 1,

    '@typescript-eslint/explicit-module-boundary-types': 0,

    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 1,

    'react/boolean-prop-naming': 1,
    'react/display-name': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/jsx-uses-vars': 2,
    'react/prop-types': 0,

    /* https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint */
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,

    'jsx-a11y/no-noninteractive-element-interactions': [
      2,
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],

    'prettier/prettier': [
      1,
      {
        endOfLine: 'auto',
      },
    ],
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-explicit-any': 1,

        /**
         * Require explicit return and argument types on exported functions' and
         * classes' public class methods
         */
        '@typescript-eslint/explicit-module-boundary-types': 1,

        /** Allowing non-null assertions using the ! postfix operator */
        '@typescript-eslint/no-non-null-assertion': 0,

        '@typescript-eslint/no-unused-vars': [
          1,
          {
            // Rest should not be reported as an issue as its an easy way to omit props.
            ignoreRestSiblings: true,
            // Allow property's that begin with an underscore character.
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        'no-unused-vars': [
          1,
          {
            // Rest should not be reported as an issue as its an easy way to omit props.
            ignoreRestSiblings: true,
            // Allow property's that begin with an underscore character.
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
};
