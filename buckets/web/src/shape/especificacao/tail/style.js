import styled from '@kuba/styled'

export default styled.style`
  .tail {
    border: var(--border-width-hairline) solid var(--color-master-light);
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    padding: var(--spacing_inset-xs);
  }

  .tail__text {
    line-height: var(--line-height-lg) !important;
  }
`
