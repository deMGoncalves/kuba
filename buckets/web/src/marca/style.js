import styled from '@kuba/styled'

export default styled.style`
  .marca {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing_inset-lg);
  }

  @media (min-width: 769px) {
    .marca {
      grid-template-columns: 1fr 2fr;
    }
  }

  .marca__thumbnail {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    justify-content: center;
  }
`
