import { color, family, size, weight } from '@kuba/polished'
import styled from '@kuba/styled'

export default new Proxy({}, {
  get: (_, tag) =>
    styled[tag]`
      color: ${color};
      font-family: ${family};
      font-size: ${size};
      font-weight: ${weight};
      letter-spacing: 0.618px;
      line-height: var(--line-height-default);
    `
})
