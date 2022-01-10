import styled from '@kuba/styled'

export default styled.style`
  .shape__area {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }

  @media (min-width: 769px) {
    .shape__area {
      flex-direction: row;
    }
  }

  .shape__spec {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }
`
