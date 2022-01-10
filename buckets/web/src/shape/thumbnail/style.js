import styled from '@kuba/styled'

export default styled.style`
  .thumbnail {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 769px) {
    .thumbnail {
      justify-content: flex-start;
    }
  }

  .thumbnail img {
    height: 383px;
    width: 287px;
  }
`
