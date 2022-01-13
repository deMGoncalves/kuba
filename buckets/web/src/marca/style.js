import styled from '@kuba/styled'

export default styled.style`
  .marca__div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }

  @media (min-width: 769px) {
    .marca__div {
      flex-direction: row;
    }
  }

  .marca__section.marca {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .marca__section.shelf {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }

  @media (min-width: 769px) {
    .marca__section.marca {
      width: calc(100% * 0.382);
    }
  }

  @media (min-width: 769px) {
    .marca__section.shelf {
      width: calc(100% * 0.618);
    }
  }
`
