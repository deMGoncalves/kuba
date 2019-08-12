module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,
    "node": true
  },
  "extends": [
    "standard",
    "standard-react"
  ],
  "globals": {
    "Atomics": "readonly",
    "Event": true,
    "HTMLElement": true,
    "HTMLDivElement": true,
    "page": true,
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json",
    "useJSXTextNode": true
  },
  "plugins": [
    "jest"
  ],
  "rules": {
    "no-unused-vars": "off",
    "react/react-in-jsx-scope": "off"
  }
};
