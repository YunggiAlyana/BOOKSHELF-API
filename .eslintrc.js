module.exports = {
    env: {
      commonjs: true,
      es2021: true,
      node: true,
    },
    extends: 'airbnb-base',
    overrides: [],
    parserOptions: {
      ecmaVersion: 'latest',
    },
    rules: {
      'no-console': 'off',
      'no-underscore-dangle': 'off',
      'comma-dangle': ['error', 'always-multiline'],
      'linebreak-style': ['error', 'unix'],
      'max-len': ['error', { code: 100 }],
    },
  };