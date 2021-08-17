import styled from '@kuba/styled'

export default styled.style`
  @media (max-width: 960px) {
    .services {
      display: none;
    }
  }

  .services__p {
    display: none;
    text-align: left;
  }

  @media (min-width: 1025px) {
    .services__p {
      display: inline;
    }
  }
`
