import styled from '@kuba/styled'

export default styled.style`
  .app__aside {
    display: none;
  }

  @media (min-width: 769px) {
    .app__aside {
      display: block;
      height: 100vh;
      left: 0;
      position: absolute;
      top: 0;
      width: 88px;
    }
  }

  @media (min-width: 769px) {
    .app__main {
      position: absolute;
      right: 0;
      top: 0;
      width: calc(100% - 88px);
    }
  }
`
