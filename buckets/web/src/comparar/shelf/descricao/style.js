import styled from '@kuba/styled'

export default styled.style`
  .descricao {
    line-height: var(--line-height-lg) !important;
    text-align: right;
  }

  .descricao + .descricao {
    text-align: left;
  }
`
