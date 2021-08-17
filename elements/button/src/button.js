import * as f from '@kuba/f'
import styled from '@kuba/styled'

export default new Proxy({}, {
  get: (_, type) =>
    styled.button`
      align-items: center;
      background-color: ${() => `var(--color-${f.toLower(type)}-dark)`};
      border: none;
      border-radius: 17px;
      color: var(--color-master-lightest);
      cursor: pointer;
      display: inline-flex;
      font-family: 'Roboto', sans-serif;
      font-size: var(--size-small);
      font-weight: 600;
      height: var(--size-largest);
      justify-content: center;
      letter-spacing: 0.618px;
      line-height: normal;
      padding: var(--size-smaller) var(--size-largest);
      text-decoration: none;
      user-select: none;
    `
})
