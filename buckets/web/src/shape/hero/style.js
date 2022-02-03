import styled from '@kuba/styled'

export default styled.style`
  .hero {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    grid-area: hero;
  }

  @media (min-width: 769px) {
    .hero {
      padding-left: var(--spacing_inset-sm) !important;
    }
  }

  .hero__div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    position: sticky;
    top: var(--spacing-sm);
  }

  .hero__menu {
    display: flex;
    gap: var(--spacing_inset-xs);
  }
`
