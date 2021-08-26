import styled from '@kuba/styled'

export default styled.style`
  .search__open {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    min-height: 42px;
    min-width: 42px;
  }

  @media (min-width: 769px) {
    .search__open {
      display: none;
    }
  }

  .search__modal {
    height: 100vh !important;
    max-height: 100vh !important;
    max-width: 100vw !important;
    width: 100vw !important;
  }

  .search__header {
    display: flex;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
  }

  .search__close {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    min-height: 42px;
    min-width: 42px;
  }

  .search__main {
    display: flex;
    flex-direction: column;
  }

  .search__form.mobile {
    max-width: 100%;
  }

  .search__form.desktop {
    display: none;
  }

  @media (min-width: 769px) {
    .search__form.desktop {
      display: block;
    }
  }
`
