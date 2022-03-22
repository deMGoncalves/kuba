import styled from '@kuba/styled'

export default styled.style`
  .control {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
  }

  .control__label {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-nano);
  }

  .control__label[oncolor] {
    color: var(--color-master-lighter) !important;
  }

  .control__input {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    border: var(--border-width-thin) solid var(--color-master-darkest);
    border-radius: var(--border-radius-sm);
    color: var(--color-master-darker);
    font-weight: var(--font-weight-regular);
    height: 42px;
    padding: 0 var(--spacing_inset-xs);
  }

  .control__input[oncolor] {
    border-color: var(--color-master-lightest);
    color: var(--color-master-lighter);
  }
`
