import styled from '@kuba/styled'

export default styled.style`
  .tag {
    align-items: center;
    background-color: var(--color-primary);
    border-radius: var(--border-radius-pill);
    display: flex;
    gap: var(--spacing_inset-nano);
    padding: var(--spacing_inset-quarck) var(--spacing_inset-xs);
    padding-right: var(--spacing_inset-nano);
  }

  .tag__icon {
    cursor: pointer;
  }
`
