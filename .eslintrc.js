module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
