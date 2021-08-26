import styled from '@kuba/styled'

export default styled.style`
  .darlings {
    display: flex;
  }

  .darlings__link {
    font-size: var(--font-size-xxxs) !important;
    text-decoration: none;
  }

  .darlings__link:not(:first-child) {
    margin-left: var(--spacing-xxxs);
  }
`
