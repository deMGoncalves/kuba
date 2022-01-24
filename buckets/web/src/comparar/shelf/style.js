import styled from '@kuba/styled'

export default styled.style`
  .shelf__section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .shelf__section.especificacao {
    gap: var(--spacing_inset-lg);
    padding-top: var(--spacing_inset-lg);
  }

  .shelf__label {
    border-bottom: 1px solid var(--color-master-light);
    display: flex;
    justify-content: center;
    padding-bottom: var(--spacing_inset-xs) !important;
  }

  @media (min-width: 769px) {
    .shelf__label {
      justify-content: flex-start;
    }
  }

  .shelf__div {
    display: flex;
    font-size: var(--font-size-xs);
    gap: var(--spacing_inset-lg);
    justify-content: space-evenly;
  }
`
