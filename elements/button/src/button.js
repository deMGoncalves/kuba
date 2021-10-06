import * as f from '@kuba/f'
import styled from '@kuba/styled'

const button = new Proxy({}, {
  get: (_, type) =>
    styled.button`
      align-items: center;
      background-color: ${() => `var(--color-${f.toLower(type)}-dark)`};
      border: none;
      border-radius: var(--border-radius-pill);
      color: var(--color-master-lightest);
      cursor: pointer;
      display: inline-flex;
      font-family: var(--font-family-base);
      font-size: var(--font-size-xxxs);
      font-weight: var(--font-weight-medium);
      justify-content: center;
      letter-spacing: 0.618px;
      line-height: var(--line-height-sm);
      padding: var(--spacing_inset-nano) var(--spacing_inset-sm);
      text-decoration: none;
      user-select: none;
    `
})

f.assign(button, {
  is: f.T
})

export default button
