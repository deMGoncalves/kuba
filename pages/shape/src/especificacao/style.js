import styled from '@kuba/styled'

export default styled.style`
  .especificacao {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }

  .especificacao__h2 {
    line-height: var(--spacing_inset-md) !important;
  }

  .especificacao__div {
    display: grid;
    grid-area: especificacao;
    grid-gap: var(--spacing_inset-xs);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 426px) {
    .especificacao__div {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 769px) {
    .especificacao__div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 961px) {
    .especificacao__div {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .especificacao__dl {
    background-color: #fff;
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    padding: var(--spacing_inset-xs);
  }

  .especificacao__text {
    line-height: var(--line-height-lg) !important;
  }
`
