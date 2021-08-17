import styled from '@kuba/styled'

export default styled.style`
  .header {
    border-bottom: 1px solid var(--color-master-light);
    display: flex;
    flex-direction: column;
    gap: var(--size-small);
    padding: var(--size-small) 0;
  }

  @media (min-width: 961px) {
    .header {
      padding-bottom: var(--size-smallest);
    }
  }

  .header__container {
    align-items: center;
    display: flex;
    gap: var(--size-medium);
  }

  @media (max-width: 960px) {
    .header__container.desktop {
      display: none;
    }
  }

  .header__div {
    display: flex;
    gap: var(--size-medium);
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
