import styled from '@kuba/styled'

export default styled`
  .dropdown__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    position: relative;
    width: 100%;
  }

  .dropdown {
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

  .dropdown:-webkit-autofill,
  .dropdown:-webkit-autofill:hover, 
  .dropdown:-webkit-autofill:focus, 
  .dropdown:-webkit-autofill:active {
    transition: background-color 9999999999s ease-in-out 0s
  }

  .dropdown:hover,
  .dropdown:focus,
  .dropdown:active {
    border-color: var(--color-master);
    outline: 0;
  }

  .dropdown::placeholder {
    color: var(--color-master);
  }

  .dropdown__trailing {
    color: var(--color-master-dark);
    bottom: 9px;
    font-size: 22px;
    position: absolute;
    right: 0;
    width: 22px;
  }
`
