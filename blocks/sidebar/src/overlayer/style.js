import styled from '@kuba/styled'

export default styled.style`
  .sidebar {
    display: none;
  }

  .sidebar[opened] {
    display: block;
    height: 100vh;
    position: fixed;
    right: 0;
    width: calc(100% - 298px);
    z-index: 2;
  }
`
