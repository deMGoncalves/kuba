import styled from '@kuba/styled'

export default styled.style`
  .thumbnail {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    grid-area: thumbnail;
  }

  @media (min-width: 769px) {
    .thumbnail {
      padding-left: var(--spacing_inset-sm) !important;
    }
  }

  .thumbnail__div {
    display: flex;
    gap: var(--spacing_inset-xs);
  }
`
