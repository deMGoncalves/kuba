module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "jest/globals": true,
    "node": true
  },
  "extends": [
    "standard"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint",
    "jest"
  ],
  "rules": {
    "no-prototype-builtins": "off",
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^[h]$",
        "argsIgnorePattern": "^_"
      }
    ]
  }
}
