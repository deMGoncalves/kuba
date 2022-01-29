import styled from '@kuba/styled'

export default styled.style`
  .inner__container {
    display: flex;
    flex-grow: 1;
    width: unset !important;
  }

  .main {
    align-items: flex-start;
    background-color: transparent;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: -100vh;
    transition: top 618ms cubic-bezier(0.77, 0, 0.175, 1);
    width: 100vw;
    z-index: 2000;
  }

  .out__container {
    align-items: center;
    background-color: white;
    display: flex;
    height: 87px;
    padding-left: 88px;
    width: 100%;
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

  .show {
    top: 0;
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
