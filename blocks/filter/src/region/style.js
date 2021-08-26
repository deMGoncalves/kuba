import styled from '@kuba/styled'

export default styled.style`
  .region__header {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
  }

  .region__open {
    border-color: var(--color-master-darker) !important;
    display: flex;
    gap: var(--spacing_inset-nano);
  }

  .region__open[selected=true] {
    background-color: var(--color-primary) !important;
    border-color: var(--color-primary-darker) !important;
    color: var(--color-master-lightest) !important;
  }

  .region__span {
    align-items: center;
    background-color: var(--color-master-lightest);
    border-radius: var(--border-radius-pill);
    color: var(--color-master-darker);
    display: flex;
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-medium);
    height: 14px;
    justify-content: center;
    line-height: var(--line-height-default);
    min-width: 14px;
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
    display: flex;
    flex-direction: column;
  }

  .region__text {
    align-items: center;
    background-color: var(--color-master-lighter);
    display: flex;
    justify-content: flex-start;
    line-height: var(--line-height-lg);
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
  }
`
