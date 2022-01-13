import styled from '@kuba/styled'

export default styled.style`
  .marca {
    display: grid;
    gap: var(--spacing_inset-lg);
    grid-template-columns: 1fr;
    padding: 0 !important;
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
    justify-content: flex-start;
  }
`
