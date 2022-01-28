import styled from '@kuba/styled'

export default styled.style`
  .modelo {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
  }

  .modelo__h1 {
    line-height: var(--line-height-md) !important;
  }

  .modelo__div {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
  }
`
