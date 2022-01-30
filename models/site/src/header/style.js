import styled from '@kuba/styled'

export default styled.style`
  @media (min-width: 768px) {
    .header__nav {
      order: 2;
    }

    .header__logo {
      order: 1;
    }

    .header__tools {
      flex-grow: 0 !important;
      order: 3;
    }
  }
`
