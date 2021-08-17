import styled from '@kuba/styled'

export default styled.style`
  .profile__p {
    display: none;
    text-align: left;
  }

  @media (min-width: 1025px) {
    .profile__p {
      display: inline;
    }
  }
`
