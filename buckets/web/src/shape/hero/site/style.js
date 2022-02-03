import styled from '@kuba/styled'

export default styled.style`
  .site {
    align-items: center;
    background-color: transparent;
    border: var(--border-width-thin) solid var(--color-master-darker);
    border-radius: var(--border-radius-sm);
    color: var(--color-master-darker);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    gap: var(--spacing_inset-sm);
    height: 42px;
    justify-content: center;
    letter-spacing: 0.618px;
    padding: 0 var(--spacing_inset-sm);
    text-decoration: none;
    user-select: none;
    width: 100% !important;
  }
`
