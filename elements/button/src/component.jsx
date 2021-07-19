import styled, { color } from '@kuba/styled'

export default new Proxy({}, {
  get: (_, type) =>
    styled.button`
      align-items: center;
      background-color: var(${() => color({ [type]: '', dark: '' })});
      border: none;
      border-radius: 18px;
      color: var(--color-master-lightest);
      cursor: pointer;
      display: inline-flex;
      font-size: var(--size-small);
      font-weight: 500;
      height: var(--size-largest);
      justify-content: center;
      letter-spacing: 0.618px;
      line-height: 1;
      padding: var(--size-smaller) var(--size-largest);
      text-decoration: none;
    `
})
