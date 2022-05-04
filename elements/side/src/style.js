import styled from '@kuba/styled'

export default styled.style`
  .side {
    background-color: var(--color-master-lightest);
    border-left: 1px solid var(--color-master-light);
    box-shadow: 0 10px 37px 0 rgba(0, 0, 0, 0.15);
    content-visibility: auto;
    height: 100vh;
    opacity: 0;
    -ms-overflow-style: none;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    transform: translate(100vw, 0);
    transition:
      opacity 618ms cubic-bezier(0.77, 0, 0.175, 1),
      transform 618ms cubic-bezier(0.77, 0, 0.175, 1);
    width: 100vw;
    z-index: 2;
  }

  .side[opened] {
    opacity: 1;
    transform: translate(0, 0);
  }

  @media (min-width: 426px) {
    .side {
      transform: translate(377px, 0);
      width: 377px;
    }
  }

  .side__overlayer {
    content-visibility: auto;
    display: none;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 0;
    z-index: 1;
  }

  .side__overlayer[opened] {
    display: block;
  }

  @media (min-width: 426px) {
    .side__overlayer {
      width: calc(100vw - 377px);
    }
  }
`
