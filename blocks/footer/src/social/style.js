import styled from '@kuba/styled'

export default styled.style`
  .social {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 769px) {
    .social {
      align-items: flex-start;
      justify-content: flex-end;
    }
  }

  .social__icon {
    cursor: pointer;
  }

  .social__icon:not(:first-of-type) {
    margin-left: var(--size-medium);
  }
`
