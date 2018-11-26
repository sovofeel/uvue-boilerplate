module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    'cypress/globals': true,
  },
  'extends': [
    "plugin:vue/recommended",
    "@vue/prettier",
    "plugin:prettier/recommended"
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    semi: ["error", "never"],
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ],
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/attributes-order': 'error',
    'vue/order-in-components': 'error'
  },
  plugins: ['cypress', 'prettier'],
  overrides: [
    {
      files: ['src/**/*', 'tests/unit/**/*', 'tests/e2e/**/*'],
      excludedFiles: 'app.config.js',
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
      },
      env: {
        browser: true,
      },
    },
    {
      files: ['**/*.unit.js'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
      },
      env: { jest: true },
      globals: {
        mount: false,
        shallowMount: false,
        shallowMountView: false,
        createComponentMocks: false,
        createModuleStore: false,
      },
    },
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}