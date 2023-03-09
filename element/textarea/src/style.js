import styled from '@kuba/styled'

export default styled`
  .textarea__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    position: relative;
    width: 100%;
  }

  .textarea {
    appearance: none;
    background-color: var(--color-pure-white);
    border: none;
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
    height: 128px;
    line-height: var(--line-height-default);
    resize: none;
    width: 100%;
  }

  .textarea:-webkit-autofill,
  .textarea:-webkit-autofill:hover, 
  .textarea:-webkit-autofill:focus, 
  .textarea:-webkit-autofill:active {
    transition: background-color 9999999999s ease-in-out 0s
  }

  .textarea:hover,
  .textarea:focus,
  .textarea:active {
    border-color: var(--color-master);
    outline: 0;
  }

  .textarea::placeholder {
    color: var(--color-master);
  }
`
