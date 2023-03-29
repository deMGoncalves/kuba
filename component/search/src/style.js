import styled from '@kuba/styled'

export default styled`
  .search__form {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    max-width: 480px;
    position: relative;
    width: 100%;
  }

  .search__input {
    appearance: none;
    background-color: var(--color-pure-white);
    border: var(--border-width-hairline) solid var(--color-master);
    border-radius: 20px;
    color: var(--color-master-dark);
    font-family: var(--font-family-base);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
    height: 40px;
    line-height: var(--line-height-default);
    padding: 0 var(--spacing_inset-xs) 0 56px;
    width: 100%;
  }

  .search__input:-webkit-autofill,
  .search__input:-webkit-autofill:hover, 
  .search__input:-webkit-autofill:focus, 
  .search__input:-webkit-autofill:active {
    transition: background-color 9999999999s ease-in-out 0s
  }

  .search__input:hover,
  .search__input:focus,
  .search__input:active {
    outline: 0;
  }

  .search__input::placeholder {
    color: var(--color-master);
    font-weight: var(--font-weight-regular);
  }

  @media (min-width: 768px) {
    .search__input {
      padding: 0 56px 0 var(--spacing_inset-xs);
    }
  }

  .search__icon {
    left: 16px;
    position: absolute;
    top: 8;
  }

  @media (min-width: 768px) {
    .search__icon {
      left: auto;
      right: 16px;
    }
  }

  .search__button {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
  }
`
