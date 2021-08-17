import styled from '@kuba/styled'

export default styled.style`
  .region__header {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: var(--size-small) var(--size-medium);
  }

  .region__open[selected=true] {
    background-color: var(--color-primary) !important;
  }

  .region__span {
    align-items: center;
    background-color: var(--color-master-darker);
    border-radius: 10.5px;
    color: var(--color-master-lightest);
    display: flex;
    font-size: var(--size-smaller);
    height: var(--size-large);
    justify-content: center;
    line-height: normal;
    margin-left: var(--size-smallest);
    width: var(--size-large);
  }

  .region__close {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-flex;
    height: 42px;
    justify-content: center;
    width: 42px;
  }

  .region__main {
    display: grid;
    flex-direction: column;
    gap: var(--size-medium);
  }

  .region__strong {
    padding: 0 var(--size-medium);
  }
`
