import styled from '@kuba/styled'

export default styled`
  .header {
    background-color: var(--color-pure-white);
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-xs) 0;
  }

  .header__container {
    display: flex;
    gap: var(--spacing_inset-xs);
  }

  @media (max-width: 767px) {
    .header__container:last-of-type {
      display: none;
    }
  }

  .header__leading,
  .header__headline,
  .header__trailing {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
  }

  .header__leading {
    flex-grow: 0;
    justify-content: flex-start;
  }

  .header__headline {
    justify-content: flex-start;
  }

  .header__trailing {
    flex-grow: 1;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    .header__search,
    .header__menu {
      display: none !important;
    }
  }
`
