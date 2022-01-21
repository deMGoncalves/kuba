import styled from '@kuba/styled'

export default styled.style`
  .material {
    display: flex;
    flex-direction: column;
    grid-area: material;
    gap: var(--spacing_inset-lg);
  }

  .material__hgroup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
  }

  .material__h2 {
    line-height: var(--spacing_inset-md) !important;
  }

  .material__div {
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
    height: 26px;
    justify-content: center;
    letter-spacing: 0.618px;
    padding: 0 var(--spacing_inset-sm);
    user-select: none;
  }
`
