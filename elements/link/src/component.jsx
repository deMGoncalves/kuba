import styled, { color } from '@kuba/styled'

export default new Proxy({}, {
  get: (_, type) =>
    styled.a`
      align-items: center;
      color: var(${() => color({ [type]: '', darker: '' })});
      cursor: pointer;
      display: inline-flex;
      font-size: var(--size-small);
      font-weight: 400;
      justify-content: center;
      letter-spacing: 0.618px
    `
})
