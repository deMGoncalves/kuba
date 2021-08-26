import styled from '@kuba/styled'

export default styled.style`
  .social {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
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
`
