import styled from '@kuba/styled'

export default styled.style`
  .shelf {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }

  @media (min-width: 769px) {
    .shelf {
      flex-direction: row;
    }
  }
`
