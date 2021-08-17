import { color, size, weight } from '@kuba/polished'
import styled from '@kuba/styled'

export default new Proxy({}, {
  get: (_, tagName) =>
    styled[tagName]`
      color: ${color};
      font-size: ${size};
      font-weight: ${weight};
    `
})
