import styled from '@kuba/styled'

export default styled.style`
  .control {
    background-color: #fff;
    border: 1px solid var(--color-master-light);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    padding: var(--spacing_inset-nano);
  }

  .control__label {
    font-weight: 500;
  }

  .control__input {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    border: none;
  }
`
