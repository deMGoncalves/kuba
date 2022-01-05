import styled from '@kuba/styled'

export default styled.style`
  .shelf__container {
    display: grid;
    gap: var(--spacing_inset-xs);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 426px) {
    .shelf__container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 769px) {
    .shelf__container {
      grid-row-gap: var(--spacing_inset-lg);
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 960px) {
    .shelf__container {
      grid-row-gap: var(--spacing_inset-lg);
      grid-template-columns: repeat(5, 1fr);
    }
  }
`
