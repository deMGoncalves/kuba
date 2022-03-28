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

  @media (min-width: 769px) {
    .variacao__div {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .variacao__section {
    align-items: flex-start;
    background-color: #fff;
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    padding: var(--spacing_inset-xs);
  }

  .variacao__dl {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
  }

  .variacao__text {
    line-height: var(--line-height-lg) !important;
  }
`
