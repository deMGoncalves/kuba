import styled from '@kuba/styled'

export default styled.style`
  .region__header {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: var(--size-small) var(--size-medium);
  }

  .region__open {
    border: 1px solid var(--color-master-darker) !important;
  }

  .region__open[selected=true] {
    background-color: var(--color-primary) !important;
    border: 1px solid var(--color-primary-darker) !important;
    color: var(--color-master-lightest) !important;
  }

  .region__span {
    align-items: center;
    background-color: var(--color-master-lightest);
    border-radius: 10.5px;
    color: var(--color-master-darker);
    display: flex;
    font-size: var(--size-smaller);
    font-weight: 500;
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
