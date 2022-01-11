import styled from '@kuba/styled'

export default styled.style`
  .marca__thumbnail {
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 0;
  }

  @media (min-width: 769px) {
    .marca__thumbnail {
      grid-template-columns: 1fr 2fr;
    }
  }
`
