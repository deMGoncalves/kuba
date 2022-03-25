import styled from '@kuba/styled'

export default styled.style`
  .site {
    align-items: center;
    background-color: var(--color-primary);
    border: var(--border-width-thin) solid var(--color-primary);
    border-radius: var(--border-radius-sm);
    color: var(--color-master-lightest);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-bold);
    gap: var(--spacing_inset-sm);
    height: 42px;
    justify-content: center;
    letter-spacing: 0.618px;
    line-height: var(--line-height-default);
    padding: 0 var(--spacing_inset-sm);
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    width: 100% !important;
  }
`
