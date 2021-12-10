import styled from '@kuba/styled'

export default styled.style`
  .sidebar {
    background-color: var(--color-menu);
    height: 100vh;
    left: -298px;
    position: fixed;
    top: 0;
    transition: transform 618ms cubic-bezier(0.77, 0, 0.175, 1);
    width: 298px;
    z-index: 2;
  }

  .sidebar[opened] {
    transform: translate(298px, 0);
  }

  @media (min-width: 769px) {
    .sidebar {
      left: -210px;
    }

    .sidebar[opened] {
      transform: translate(210px, 0);
    }
  }

  .sidebar__header {
    background-color: var(--color-menu-dark);
    border-bottom: var(--border-width-hairline) solid var(--color-master-darkest);
  }

  .sidebar__div {
    display: none;
  }

  .sidebar__div[opened] {
    display: block;
    height: 100vh;
    position: fixed;
    right: 0;
    width: calc(100% - 298px);
    z-index: 2;
  }
`
