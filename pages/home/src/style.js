import styled from '@kuba/styled'

export default styled.style`
  .home {
    display: flex;
    height: 100vh;
  }

  .home__splash {
    display: none;
  }

  @media (min-width: 769px) {
    .home__splash {
      display: flex;
      flex-grow: 1;
    }
  }

  .home__cover {
    width: 100vw;
  }

  @media (min-width: 769px) {
    .home__cover {
      width: 466px;
    }
  }
`
