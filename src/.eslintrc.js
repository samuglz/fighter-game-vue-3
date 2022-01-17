module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "vue/setup-compiler-macros": true
  },
  "extends": [
    "plugin:vue/base",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2021
  },
  rules: {
    indent: ['error', 2],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    "object-curly-spacing": ["error", "always"],
    "vue/script-setup-uses-vars": "error",
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}