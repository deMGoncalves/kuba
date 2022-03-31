import styled from '@kuba/styled'

export default styled.style`
  .option {
    border: var(--border-width-hairline) solid var(--color-master-light);
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    padding: var(--spacing_inset-xs);
    text-align: center;
    width: calc(33% - 10.666px);
  }

  .option[selected] {
    border: var(--border-width-hairline) solid var(--color-primary);
  }
`
