import styled from '@kuba/styled'

export default styled.style`
  .inner__container {
    display: flex;
    flex-grow: 1;
    width: unset !important;
  }

  .searchbar__overlayer {
    display: none;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1;
  }

  .searchbar__overlayer[opened] {
    display: block;
  }

  .searchbar {
    align-items: center;
    background-color: var(--color-master-lightest);
    display: flex;
    height: 89px;
  }

  .input__container {
    align-items: center;
    border: solid var(--border-width-thin) var(--color-master-dark);
    border-radius: 100px;
    display: flex;
    flex-grow: 1;
    height: 48px;
    margin-right: var(--spacing-xxxs);
    padding: 0 var(--spacing-xxxs);
  }

  .input__container input {
    -webkit-appearance: none;
    border: none;
    flex-grow: 1;
    font-size: var(--font-size-xs);
    margin: 0 var(--spacing-xxxs);
  }

  .input__container input:-webkit-autofill,
  .input__container input:-webkit-autofill:hover,
  .input__container input:-webkit-autofill:focus,
  .input__container input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  .input__container button {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
  }

  .close {
    align-items: center;
    background-color: white;
    border: solid var(--border-width-thin) var(--color-master-darker) !important;
    border-radius: var(--border-radius-circular);
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 769px) {
    .out__container {
      padding-left: 0;
    }
  }
`
