import styled from '@kuba/styled'

export default styled.style`
  .shapes__grid {
    display: grid;
    gap: var(--spacing_inset-md);
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) {
    .shapes__grid {
      gap: var(--spacing_inset-md) var(--spacing_inset-xs);
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 961px) {
    .shapes__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
