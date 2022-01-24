import styled from '@kuba/styled'

export default styled.style`
  .shelf__section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .shelf__thumb {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-lg);
    justify-content: center;
  }

  .shelf__section.especificacao {
    padding-top: var(--spacing_inset-lg);
  }

  .shelf__label {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-bottom: var(--spacing_inset-xs) !important;
  }

  @media (min-width: 769px) {
    .shelf__label {
      justify-content: center;
    }
  }

  .shelf__div {
    border-bottom: 1px solid var(--color-master-light);
    display: flex;
    font-size: var(--font-size-xs);
    gap: var(--spacing_inset-lg);
    justify-content: center;
    padding-bottom: var(--spacing_inset-lg) !important;
  }
`
