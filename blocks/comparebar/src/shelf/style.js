import styled from '@kuba/styled'

export default styled.style`
  .shelf {
    min-height: calc(100vh - 176px);
  }

  .shelf__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }
`
