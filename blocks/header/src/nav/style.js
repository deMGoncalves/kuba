import styled from '@kuba/styled'

export default styled.style`
  .nav {
    align-items: center;
    background-color: var(--color-master-lightest);
    display: none;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    height: calc(100vh - 89px);
    left: 0;
    padding: var(--spacing_inset-lg) var(--spacing_inset-xs);
    position: absolute;
    top: 89px;
    width: 100%;
    z-index: 2;
  }

  .nav[opened] {
    display: flex;
  }

  @media (min-width: 769px) {
    .nav {
      background-color: transparent;
      display: flex;
      flex-direction: row;
      gap: var(--spacing_inset-md);
      height: auto;
      left: auto;
      padding: 0;
      position: relative;
      top: auto;
      width: auto;
    }
  }

  .nav__link {
    text-decoration: none;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    .nav__link {
      align-items: center;
      border-radius: var(--border-radius-pill);
      display: inline-flex;
      height: 34px;
      justify-content: center;
      width: 298px;
    }

    .nav__link:hover {
      background-color: var(--color-master-lighter);
    }
  }

  @media (min-width: 769px) {
    .nav__button {
      display: none !important;
    }
  }
`
