import styled, { color, size } from '@kuba/styled'

export default new Proxy({}, {
  get: (_, tagName) =>
    styled[tagName]`
      color: var(${color});
      font-size: var(${size});
    `
})
