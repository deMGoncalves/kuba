import styled from '@kuba/styled'

export default styled.style`
  .zoom {
    background-color: #fff;
    display: none;
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: 2;
  }

  .zoom[opened='true'] {
    display: block;
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
