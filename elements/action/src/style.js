import styled from '@kuba/styled'

export default styled.style`
  .action__button {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    gap: var(--spacing_inset-nano);
    justify-content: center;
    min-height: 42px;
    min-width: 42px;
  }

  .action__header {
    align-items: center;
    display: flex;
    gap: var(--spacing-xxxs);
    justify-content: flex-start;
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
  }
`
