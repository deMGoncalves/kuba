import styled from '@kuba/styled'

export default styled.style`
  .exploration > div {
    display: grid;
    gap: var(--spacing_inset-sm);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    .exploration > div {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .exploration__figure {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .exploration__p {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
  }
`
