import styled from '@kuba/styled'

export default styled.style`
  .region {
    display: none;
  }

  @media (min-width: 769px) {
    .region {
      display: flex;
    }
  }

  .region__p {
    display: none;
    text-align: left;
  }

  @media (min-width: 1025px) {
    .region__p {
      display: inline;
    }
  }
`
