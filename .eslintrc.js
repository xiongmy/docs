module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [2, { props: false }],
    'prefer-destructuring': ['error', { object: false, array: false }],
    'max-len': ['error', { code: 300 }],
    'linebreak-style': [0, 'error', 'windows'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
