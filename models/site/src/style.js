import styled from '@kuba/styled'

export default styled.style`
  @media (min-width: 768px) {
    .site__nav {
      order: 2;
    }

    .site__logo {
      order: 1;
    }

    .site__compare {
      order: 3;
    }
  }

  .site__main {
    min-height: calc(100vh - 176px);
  }
`
