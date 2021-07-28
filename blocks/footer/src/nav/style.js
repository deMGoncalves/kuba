import styled from '@kuba/styled'

export default styled.style`
  .nav {
    display: block;
    padding-top: var(--size-largest);
  }

  .nav__link:not(:first-of-type) {
    margin-left: var(--size-medium);
  }
`
