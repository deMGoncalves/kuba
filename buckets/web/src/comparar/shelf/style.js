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

  .shelf__div {
    display: grid;
    grid-column-gap: var(--spacing_inset-lg);
    grid-row-gap: var(--spacing_inset-nano);
    grid-template-columns: repeat(2, 1fr);
  }
`
