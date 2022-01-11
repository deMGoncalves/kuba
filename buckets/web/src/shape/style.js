import styled from '@kuba/styled'

export default styled.style`
  .shape__div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-md);
  }

  @media (min-width: 769px) {
    .shape__div {
      flex-direction: row;
    }
  }

  .shape__section.thumbnail,
  .shape__section.specification {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-md);
  }

  @media (min-width: 769px) {
    .shape__section.thumbnail {
      width: calc(100% * 0.382);
    }
  }

  .shape__hgroup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
  }
`
