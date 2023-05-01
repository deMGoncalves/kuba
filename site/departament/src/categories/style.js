import styled from '@kuba/styled'

export default styled`
  .categories {
    flex-direction: column;
    display: flex;
    gap: var(--spacing_inset-xs);
    width: 100%;
  }

  .categories__bubble {
    min-width: calc(66.66% - 14px);
  }

  @media (min-width: 395px) {
    .categories__bubble {
      min-width: calc(40% - 14px);
    }
  }

  @media (min-width: 543px) {
    .categories__bubble {
      min-width: calc(28.57% - 14px);
    }
  }

  @media (min-width: 691px) {
    .categories__bubble {
      min-width: calc(22.22% - 14px);
    }
  }

  @media (min-width: 839px) {
    .categories__bubble {
      min-width: calc(18.18% - 14px);
    }
  }

  @media (min-width: 989px) {
    .categories__bubble {
      min-width: calc(15.38% - 14px);
    }
  }

  @media (min-width: 1135px) {
    .categories__bubble {
      min-width: calc(13.33% - 14px);
    }
  }

  @media (min-width: 1217px) {
    .categories__bubble {
      min-width: calc(12.50% - 14px);
    }
  }
`
