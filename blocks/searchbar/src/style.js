import styled from '@kuba/styled'

export default styled.style`
  .searchbar {
    align-items: center;
    background-color: var(--color-master-lightest);
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
    display: flex;
    height: 89px;
    left: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    transform: translate(0, -89px);
    transition:
      opacity 618ms cubic-bezier(0.77, 0, 0.175, 1),
      transform 618ms cubic-bezier(0.77, 0, 0.175, 1);
    width: 100vw;
    z-index: 2;
  }

  .searchbar[opened] {
    opacity: 1;
    transform: translate(0, 0);
  }

  .searchbar__div {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
  }

  .searchbar__form {
    width: 100%;
  }

  .searchbar__input {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    border: var(--border-width-thin) solid var(--color-master-darkest);
    border-radius: var(--border-radius-pill);
    color: var(--color-master-darker);
    font-size: var(--font-size-xxs);
    font-weight: var(--font-weight-regular);
    height: 42px;
    padding: 0 var(--spacing_inset-sm);
    width: 100%;
  }

  .searchbar__overlayer {
    display: none;
    height: calc(100vh - 89px);
    left: 0;
    position: fixed;
    top: 89px;
    width: 100vw;
    z-index: 2;
  }

  .searchbar__overlayer[opened] {
    display: block;
  }
`
