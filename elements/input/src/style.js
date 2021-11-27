import styled from '@kuba/styled'

export default styled.style`
  .input__div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
  }

  .input__text {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-nano);
  }

  .input__text[oncolor] {
    color: var(--color-master-lighter) !important;
  }

  .input {
    -webkit-appearance: none;
    appearance: none;
    border: var(--border-width-thin) solid var(--color-master-dark);
    border-radius: var(--border-radius-sm);
    color: var(--color-master);
    font-weight: var(--font-weight-regular);
    height: 48px;
    padding: 0 var(--spacing_inset-xs);
  }

  .input[oncolor] {
    background-color: transparent;
    border-color: var(--color-master-lightest);
    color: var(--color-master-lighter);
  }
`
