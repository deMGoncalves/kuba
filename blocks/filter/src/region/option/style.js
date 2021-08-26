import styled from '@kuba/styled'

export default styled.style`
  .option {
    align-items: center;
    border-bottom: var(--border-width-hairline) solid var(--color-master-lighter);
    cursor: pointer;
    display: flex;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
    user-select: none;
  }

  .option__text {
    line-height: var(--line-height-lg);
  }
`
