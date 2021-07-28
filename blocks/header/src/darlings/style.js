import styled from '@kuba/styled'

export default styled.style`
  .darlings {
    display: flex;
  }

  .darlings__link {
    text-decoration: none;
  }

  .darlings__link:not(:first-child) {
    margin-left: var(--size-medium);
  }
`
