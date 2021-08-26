import styled from '@kuba/styled'

export default styled.style`
  .nav {
    display: flex;
  }

  .nav__link {
    font-size: var(--font-size-xxxs) !important;
    font-weight: var(--font-weight-medium) !important;
    text-decoration: none;
  }

  .nav__link:not(:first-child) {
    margin-left: var(--spacing-xxxs);
  }
`
