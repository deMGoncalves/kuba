import styled from '@kuba/styled'

export default styled.style`
  .shelf > div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-sm);
  }

  .shelf__main {
    column-gap: var(--spacing-xxxs);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: var(--spacing_inset-lg);
  }

  @media (min-width: 769px) {
    .shelf__main {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 961px) {
    .shelf__main {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
