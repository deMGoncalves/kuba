import styled from '@kuba/styled'

export default styled.style`
  .material {
    display: flex;
    gap: var(--spacing_inset-xs);
  }

  .material__tag {
    align-items: center;
    background-color: var(--color-master-light);
    border-radius: var(--border-radius-pill);
    color: var(--color-master-darker);
    display: inline-flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-medium);
    height: 35px;
    justify-content: center;
    letter-spacing: 0.618px;
    padding: 0 var(--spacing_inset-sm);
    user-select: none;
  }
`
