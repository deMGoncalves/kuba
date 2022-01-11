import styled from '@kuba/styled'

export default styled.style`
  .especificacao {
    display: grid;
    grid-gap: var(--spacing_inset-xs);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    .especificacao {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
