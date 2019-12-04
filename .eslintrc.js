module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'airbnb-base',
    'plugin:vue/recommended'
  ],

  rules: {
    'semi': ['error', 'never'],
    'no-shadow': ['error', { 'allow': ['state'] }],
    'no-param-reassign': [
      'error',
      {
        'props': false,
        // 'ignorePropertyModificationsFor': ['state'],
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'max-len': 'off',
    'template-curly-spacing': 'off',
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'ignoredNodes': ['TemplateLiteral']
    }],
  }
}
