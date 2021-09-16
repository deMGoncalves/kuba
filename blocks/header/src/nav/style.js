import styled from '@kuba/styled'

export default styled.style`
  .nav {
    display: flex;
  }

  .nav__home,
  .nav__departament {
    font-size: var(--font-size-xxxs) !important;
    font-weight: var(--font-weight-medium) !important;
    text-decoration: none;
  }

  .nav__departament {
    margin-left: var(--spacing-xxxs);
  }
`
