import styled from '@kuba/styled'

export default styled`
  .input__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    position: relative;
    width: 100%;
  }

  .input {
    appearance: none;
    background-color: var(--color-pure-white);
    border: none;
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
    height: 40px;
    line-height: var(--line-height-default);
    width: 100%;
  }

  .input:-webkit-autofill,
  .input:-webkit-autofill:hover, 
  .input:-webkit-autofill:focus, 
  .input:-webkit-autofill:active {
    transition: background-color 9999999999s ease-in-out 0s
  }

  .input:hover,
  .input:focus,
  .input:active {
    border-color: var(--color-master);
    outline: 0;
  }

  .input::placeholder {
    color: var(--color-master);
  }

  .input__trailing {
    position: absolute;
    right: 0;
    top: 37px;
  }
}
`
