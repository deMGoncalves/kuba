import styled from '@kuba/styled'

export default styled.style`
  .variacao {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }

  .variacao__h2 {
    line-height: var(--spacing_inset-md) !important;
  }

  .variacao__div {
    display: grid;
    grid-area: variacao;
    grid-gap: var(--spacing_inset-xs);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 426px) {
    .variacao__div {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 769px) {
    .variacao__div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 961px) {
    .variacao__div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
