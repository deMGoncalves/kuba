import styled from '@kuba/styled'

export default styled.style`
  .header {
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xxxs);
    padding: var(--spacing-nano) 0;
  }

  .header__container {
    align-items: center;
    display: flex;
    gap: var(--spacing-xxxs);
  }

  @media (max-width: 960px) {
    .header__container.desktop {
      display: none;
    }
  }

  .header__div {
    display: flex;
    gap: var(--spacing-xxxs);
  }

  .header__div:first-child {
    flex-grow: 1;
    justify-content: space-between;
  }

  @media (min-width: 769px) {
    .header__div:first-child {
      justify-content: flex-start;
    }
  }

  .header__div:last-child {
    justify-content: flex-end;
  }
`
