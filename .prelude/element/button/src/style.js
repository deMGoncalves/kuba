import styled from '@kuba/styled'

export default styled`
  .button {
    align-items: center;
    border-radius: var(--border-radius-pill);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-medium);
    display: flex;
    gap: var(--spacing_inset-nano);
    height: 40px;
    justify-content: center;
    line-height: var(--line-height-default);
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
  }

  .primary {
    background-color: var(--color-master-dark);
    border: var(--border-width-hairline) solid var(--color-master-dark);
    color: var(--color-pure-white);
  }

  .secondary {
    background-color: var(--color-pure-white);
    border: var(--border-width-hairline) solid var(--color-master-dark);
    color: var(--color-master-dark);
  }
`
