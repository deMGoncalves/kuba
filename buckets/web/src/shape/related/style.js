import styled from '@kuba/styled'

export default styled.style`
  .related__container {
    display: grid;
    grid-column-gap: var(--spacing_inset-xs);
    grid-row-gap: var(--spacing_inset-md);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    .related__container {
      grid-row-gap: var(--spacing_inset-lg);
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
