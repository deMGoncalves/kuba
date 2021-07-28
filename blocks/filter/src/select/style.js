import styled from '@kuba/styled'

export default styled.style`
  .select__header {
    align-items: center;
    border-bottom: 1px solid var(--color-master-light);
    display: flex;
    justify-content: space-between;
    padding: var(--size-small) var(--size-medium);
  }

  .select__label {
    line-height: 1;
  }

  .select__open {
    gap: var(--size-medium);
  }

  .select__close {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-flex;
    height: 42px;
    justify-content: center;
    width: 42px;
  }

  .select__main {
    display: flex;
    flex-direction: column;
    gap: var(--size-medium);
    padding: var(--size-medium);
  }
`
