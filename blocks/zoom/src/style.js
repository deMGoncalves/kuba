import styled from '@kuba/styled'

export default styled.style`
  .zoom {
    align-items: center;
    background-color: #fff;
    content-visibility: auto;
    display: none;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2;
  }

  .zoom[opened] {
    display: flex;
  }

  .zoom__button {
    position: fixed;
    right: var(--spacing-xxxs);
    top: var(--spacing-xxxs);
  }

  .zoom__img {
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    object-position: center;
  }
`
