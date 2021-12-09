import styled from '@kuba/styled'

export default styled.style`
  .sidebar {
    background-color: var(--color-menu);
    display: none;
    height: 100vh;
    left: -298px;
    position: fixed;
    top: 0;
    transition:
      opacity 618ms cubic-bezier(0.77, 0, 0.175, 1),
      transform 618ms cubic-bezier(0.77, 0, 0.175, 1);
    width: 298px;
    z-index: 1;
  }

  .sidebar[opened] {
    transform: translate(298px, 0);
  }

  @media (min-width: 769px) {
    .sidebar {
      display: block;
      left: -210px;
    }

    .sidebar[opened] {
      transform: translate(210px, 0);
    }
  }
`
