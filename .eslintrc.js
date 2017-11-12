module.exports = {
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  globals: {
    VERSION: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': ['error', 'always-multiline'],
  }
}
