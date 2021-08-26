import styled from '@kuba/styled'

export default styled.style`
  .form {
    max-width: 610px;
    position: relative;
    width: 100%;
  }

  .form__input {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--color-master-lighter);
    border: var(--border-width-hairline) solid var(--color-master-light);
    border-radius: 4px;
    height: 42px;
    padding: 0 55px 0 var(--spacing_inset-xs);
    width: 100%;
  }

  .form__button {
    align-items: center;
    background-color: var(--color-master-lighter);
    border: none;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    position: absolute;
    right: 1px;
    top: 1px;
    width: 40px;
  }

  .form__button::before {
    border-left: 1px solid var(--color-master-light);
    content: '';
    display: block;
    height: 55%;
    left: 0;
    position: absolute;
  }
`
