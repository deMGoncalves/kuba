import styled from '@kuba/styled'

export default styled`
  .accordion {
    width: 100%;
  }

  .accordion__summary {
    align-items: center;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    display: flex;
    gap: var(--spacing_inset-xs);
    height: 40px;
    justify-content: space-between;
    padding: var(--spacing_inset-nano) 0;
    user-select: none;
    width: 100%;
  }

  .accordion__content {
    display: none;
    padding: var(--spacing_inset-xs) 0;
    width: 100%;
  }

  .accordion__content[opened] {
    display: block;
  }
`
