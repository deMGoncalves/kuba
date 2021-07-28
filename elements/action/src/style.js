import styled from '@kuba/styled'

export default styled.style`
  .action__button {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    gap: var(--size-smallest);
    justify-content: center;
    min-height: 42px;
    min-width: 42px;
  }

  .action__header {
    align-items: center;
    border-bottom: 1px solid var(--color-master-light);
    display: flex;
    gap: var(--size-medium);
    justify-content: flex-start;
    padding: var(--size-smallest) var(--size-medium);
  }
`
