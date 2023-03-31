import styled from '@kuba/styled'

export default styled`
  .categories {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    width: 100%;
  }

  .categories__bubble {
    min-width: calc(40% - 14px);
  }

  @media (min-width: 481px) {
    .categories__bubble {
      min-width: calc(28.57% - 14px);
    }
  }

  @media (min-width: 769px) {
    .categories__bubble {
      min-width: calc(22.22% - 14px);
    }
  }

  @media (min-width: 961px) {
    .categories__bubble {
      min-width: calc(18.18% - 14px);
    }
  }

  @media (min-width: 1200px) {
    .categories__bubble {
      min-width: calc(12.5% - 14px);
    }
  }
`
