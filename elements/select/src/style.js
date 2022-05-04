import styled from '@kuba/styled'

export default styled.style`
  .select {
    background-color: var(--color-master-lightest);
    border-left: var(--border-width-hairline) solid var(--color-master-light);
    bottom: 0;
    box-shadow: 0 -10px 37px 0 rgba(0, 0, 0, 0.15);
    content-visibility: auto;
    height: 610px;
    left: 0;
    opacity: 0;
    -ms-overflow-style: none;
    overflow-y: auto;
    position: fixed;
    transform: translate(0, 610px);
    transition:
      opacity 618ms cubic-bezier(0.77, 0, 0.175, 1),
      transform 618ms cubic-bezier(0.77, 0, 0.175, 1);
    width: 100vw;
    z-index: 1;
  }

  .select[opened] {
    opacity: 1;
    transform: translate(0, 0);
  }

  @media (min-width: 769px) {
    .select {
      bottom: auto;
      box-shadow: 0 10px 37px 0 rgba(0, 0, 0, 0.15);
      height: 100vh;
      top: 0;
      transform: translate(-377px, 0);
      width: 377px;
    }
  }

  .select__overlayer {
    content-visibility: auto;
    display: none;
    height: calc(100vh - 610px);
    position: fixed;
    right: 0;
    top: 0;
    width: 100vw;
    z-index: 1;
  }

  .select__overlayer[opened] {
    display: block;
  }

  @media (min-width: 769px) {
    .select__overlayer {
      height: 100vh;
      width: calc(100vw - 377px);
    }
  }
`
