import styled from '@kuba/styled'

export default styled`
  .navigation__header {
    align-items: center;
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
    display: flex;
    height: 73px;
    justify-content: space-between;
    padding: 0 var(--spacing_inset-xs);
    width: 100%;
  }

  .navigation__nav {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    padding: var(--spacing_inset-xs);
  }

  .navigation__link {
    align-items: center;
    display: flex;
    height: 40px;
  }

  .navigation__menu {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
  }
`
