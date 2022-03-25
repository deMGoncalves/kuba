import styled from '@kuba/styled'

export default styled.style`
  .pro {
    align-items: center;
    background-color: var(--color-primary);
    border-radius: var(--border-radius-pill);
    display: none;
    gap: var(--spacing_inset-nano);
    justify-content: center;
    padding: var(--spacing_inset-quarck) var(--spacing_inset-xs);
  }

  .pro[are] {
    display: flex;
  }
`
