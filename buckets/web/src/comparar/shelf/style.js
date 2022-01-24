import styled from '@kuba/styled'

export default styled.style`
  .shelf__section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .shelf__thumb {
    display: grid;
    gap: var(--spacing_inset-lg);
    grid-template-columns: repeat(2, 1fr);
  }

  .shelf__thumb > figure:nth-child(1) {
    text-align: right;
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

  .shelf__div {
    border-bottom: 1px solid var(--color-master-light);
    display: grid;
    font-size: var(--font-size-xs);
    gap: var(--spacing_inset-lg);
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: var(--spacing_inset-lg) !important;
  }

  .shelf__div:last-child {
    border-bottom: none;
  }
`
