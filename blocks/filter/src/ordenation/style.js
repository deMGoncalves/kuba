import styled from '@kuba/styled'

export default styled.style`
  .ordenation__header {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
  }

  .ordenation__open {
    border-color: var(--color-master-darker) !important;
  }

  .ordenation__open[selected=true] {
    background-color: var(--color-primary) !important;
    border-color: var(--color-primary-darker) !important;
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
    display: flex;
    flex-direction: column;
  }

  .ordenation__text {
    align-items: center;
    background-color: var(--color-master-lighter);
    display: flex;
    justify-content: flex-start;
    line-height: var(--line-height-lg);
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
  }
`
