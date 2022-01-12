import styled from '@kuba/styled'

export default styled.style`
  .shape__div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }

  @media (min-width: 769px) {
    .shape__div {
      flex-direction: row;
    }
  }

  .shape__section.thumbnail {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .shape__section.specification {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }

  @media (min-width: 769px) {
    .shape__section.thumbnail {
      width: calc(100% * 0.382);
    }
  }

  @media (min-width: 769px) {
    .shape__section.specification {
      width: calc(100% * 0.618);
    }
  }

  .shape__hgroup {
    display: flex;
    flex-direction: column;
  }
`
