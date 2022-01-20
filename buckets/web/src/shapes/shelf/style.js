import styled from '@kuba/styled'

export default styled.style`
  .shelf {
    display: grid;
    grid-column-gap: var(--spacing_inset-xs);
    grid-row-gap: var(--spacing_inset-lg);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    .shelf {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 961px) {
    .shelf {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
