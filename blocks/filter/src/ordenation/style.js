import styled from '@kuba/styled'

export default styled.style`
  .ordenation__header {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: var(--size-small) var(--size-medium);
  }

  .ordenation__open[selected=true] {
    background-color: var(--color-primary) !important;
    border: 1px solid var(--color-primary-darker) !important;
    color: var(--color-master-lightest) !important;
  }

  .ordenation__close {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-flex;
    height: 42px;
    justify-content: center;
    width: 42px;
  }

  .ordenation__main {
    display: grid;
    flex-direction: column;
    gap: var(--size-medium);
  }

  .ordenation__strong {
    padding: 0 var(--size-medium);
  }
`
