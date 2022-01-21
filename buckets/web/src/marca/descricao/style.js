import styled from '@kuba/styled'

export default styled.style`
  .descricao {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }

  .descricao__h2 {
    line-height: var(--line-height-md) !important;
  }

  .descricao__p {
    line-height: var(--line-height-lg) !important;
  }
`
