module.exports = {
  "parser": "typescript-eslint-parser",
  "parserOptions": {
    "jsx": true,
    "useJSXTextNode": true
  },
  "extends": [
    "standard",
    "standard-react"
  ],
  "plugins": [
    "jest"
  ],
  "rules": {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "no-unused-vars": "off",
    "react/no-unknown-property": "off",
    "react/react-in-jsx-scope": "off"
  },
  "env": {
    "jest/globals": true
  },
  "globals": {
    "Event": true,
    "HTMLElement": true,
    "HTMLDivElement": true
  }
}
