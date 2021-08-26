import * as f from '@kuba/f'
import styled from '@kuba/styled'

export default new Proxy({}, {
  get: (_, type) =>
    styled.a`
      align-items: center;
      color: ${() => `var(--color-${f.toLower(type)}-darker)`};
      cursor: pointer;
      display: inline-flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-regular);
      letter-spacing: 0.618px;
      justify-content: center;
      user-select: none;
    `
})
