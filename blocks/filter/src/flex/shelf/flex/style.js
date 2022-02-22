import styled from '@kuba/styled'

export default styled.style`
  .flex {
    border: var(--border-width-hairline) solid var(--color-master-light);
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    padding: var(--spacing_inset-xs);
  }

  .flex[selected] {
    border: var(--border-width-hairline) solid var(--color-primary);
  }
`