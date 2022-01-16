import styled from '@kuba/styled'

export default styled.style`
  .shelf__container {
    display: grid;
    grid-column-gap: var(--spacing_inset-xs);
    grid-row-gap: var(--spacing_inset-lg);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    .shelf__container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
