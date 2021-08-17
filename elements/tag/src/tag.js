import * as f from '@kuba/f'
import styled from '@kuba/styled'

export default new Proxy({}, {
  get: (_, type) =>
    styled.button`
      align-items: center;
      background-color: transparent;
      border: ${() => `1px solid var(--color-${f.toLower(type)}-darker)`};
      border-radius: 17px;
      color: ${() => `var(--color-${f.toLower(type)}-darker)`};
      cursor: pointer;
      display: inline-flex;
      font-family: 'Roboto', sans-serif;
      font-size: var(--size-small);
      font-weight: 500;
      height: var(--size-largest);
      justify-content: center;
      letter-spacing: 0.618px;
      line-height: 1;
      padding: var(--size-smaller) var(--size-larger);
      text-decoration: none;
      user-select: none;
    `
})
