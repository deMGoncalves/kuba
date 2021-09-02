import styled from '@kuba/styled'

export default styled.style`
  .story {
    display: inline-flex;
    margin: var(--spacing-sm) auto;
    width: 100%;
  }

  @media (min-width: 961px) {
    .story {
      margin: var(--spacing-lg) auto;
    }
  }
`
