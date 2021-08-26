import * as f from '@kuba/f'
import styled from '@kuba/styled'

export default new Proxy({}, {
  get: (_, type) =>
    styled.button`
      align-items: center;
      background-color: ${() => `var(--color-${f.toLower(type)}-lighter)`};
      border: var(--border-width-hairline) solid ${() => `var(--color-${f.toLower(type)}-light)`};
      border-radius: var(--border-radius-pill);
      color: ${() => `var(--color-${f.toLower(type)}-darker)`};
      cursor: pointer;
      display: inline-flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxxs);
      font-weight: var(--font-weight-medium);
      justify-content: center;
      letter-spacing: 0.618px;
      line-height: var(--line-height-sm);
      padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
      text-decoration: none;
      user-select: none;
    `
})
