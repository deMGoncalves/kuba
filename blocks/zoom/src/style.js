import styled from '@kuba/styled'

export default styled.style`
  .zoom {
    background-color: #fff;
    display: none;
  }

  .zoom[opened='true'] {
    display: block;
    height: calc(100% * 2);
    position: absolute;
    top: -90px;
    width: 100%;
    z-index: 4;
  }

  .zoom__header {
    display: flex;
    justify-content: flex-end;
    padding: var(--spacing_inset-xs);
  }

  .zoom__close {
    border-radius: var(--border-radius-pill) !important;
  }

  .zoom__main picture > img {
    object-fit: contain;
  }
`
