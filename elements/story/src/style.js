import styled from '@kuba/styled'

export default styled.style`
  .story {
    display: inline-block;
    margin: var(--spacing-lg) auto;
    width: 100%;
  }

  @media (min-width: 961px) {
    .story {
      margin: var(--spacing-xl) auto;
    }
  }
`
