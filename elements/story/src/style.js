import styled from '@kuba/styled'

export default styled.style`
  .story {
    display: block;
    padding: var(--spacing_inset-md) 0;
    width: 100%;
  }

  @media (min-width: 961px) {
    .story {
      padding: var(--spacing_inset-lg) 0;
    }
  }
`
