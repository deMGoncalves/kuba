module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "standard",
    "standard-react"
  ],
  "globals": {
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json",
    "useJSXTextNode": true,
    "warnOnUnsupportedTypeScriptVersion": false
  },
  "plugins": [
    "stylelint-selector-bem-pattern"
  ],
  "rules": {
    "no-prototype-builtins": "off",
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^[h]$",
        "argsIgnorePattern": "^_"
      }
    ],
    "plugin/selector-bem-pattern": {
      "componentName": "[A-Z]+",
      "componentSelectors": {
        "initial": "^\\.{componentName}(?:-[a-z]+)?$",
        "combined": "^\\.combined-{componentName}-[a-z]+$"
      },
      "utilitySelectors": "^\\.util-[a-z]+$"
    },
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
};
