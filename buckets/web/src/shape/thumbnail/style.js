import styled from '@kuba/styled'

export default styled.style`
  .thumbnail {
    grid-area: thumbnail;
  }

  @media (min-width: 769px) {
    .thumbnail {
      padding-left: var(--spacing_inset-sm) !important;
    }
  }

  .thumbnail__figure {
    background-color: #fff;
    border: var(--border-width-hairline) solid var(--color-master-light);
    border-radius: var(--border-radius-sm);
    gap: 0;
  }

  .thumbnail__figure picture {
    border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
    padding-top: calc(5 / 4 * 100%) !important;
  }

  .thumbnail__figure figcaption {
    border-top: var(--border-width-hairline) solid var(--color-master-light);
    padding: var(--spacing_inset-xs);
  }
`
