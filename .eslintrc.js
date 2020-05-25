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
  "rules": {
    "no-prototype-builtins": "off",
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^[h]$",
        "argsIgnorePattern": "^_"
      }
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
};
