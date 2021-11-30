import styled from '@kuba/styled'

export default styled.style`
  .header {
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
  }

  .header__container {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-md);
    height: 88px;
    justify-content: space-between;
  }

  .header__nav {
    align-items: center;
    background-color: var(--color-master-lightest);
    display: none;
    flex-direction: column;
    gap: var(--spacing_inset-md);
    height: calc(100vh - 89px);
    left: 0;
    padding: var(--spacing_inset-lg) var(--spacing_inset-xs);
    position: absolute;
    top: 89px;
    width: 100%;
  }

  .header__nav[opened] {
    display: flex;
  }

  @media (min-width: 648px) {
    .header__nav {
      background-color: transparent;
      display: flex;
      flex-direction: row;
      height: auto;
      left: auto;
      padding: 0;
      position: relative;
      top: auto;
      width: auto;
    }
  }

  @media (min-width: 648px) {
    .header__button {
      display: none !important;
    }
  }
`
