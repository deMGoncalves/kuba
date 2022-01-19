import styled from '@kuba/styled'

export default styled.style`
  .thumbnail {
    background-color: #fff;
    border-radius: var(--border-radius-sm);
  }

  .thumbnail picture {
    border-radius: inherit;
    padding-top: calc(5 / 4 * 100%) !important;
  }

  .thumbnail figcaption {
    align-items: center;
    display: flex;
    height: 35px;
    padding: 0 var(--spacing_inset-xs);
  }

  .thumbnail__placeholder {
    height: 100%;
    width: 100%;
  }
`
