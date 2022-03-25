import styled from '@kuba/styled'

export default new Proxy({}, {
  get: (_, tag) =>
    styled[tag]`
      margin: 0 auto;
      max-width: ${(props) => (props.fluid ? 'auto' : '987px')};
      padding: 0 var(--spacing_inset-xs);
      position: relative;
      width: 100%;
    `
})
