import styled from '@kuba/styled'

export default styled.style`
  .nav {
    display: flex;
  }

  .nav__link {
    font-weight: 500 !important;
    line-height: normal;
    text-decoration: none;
  }

  .nav__link:not(:first-child) {
    margin-left: var(--size-medium);
  }
`
