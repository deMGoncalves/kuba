import styled from '@kuba/styled'

export default styled.style`
  @media (min-width: 862px) {
    .menu {
      display: none;
    }
  }

  .menu__span {
    align-items: center;
    background-color: var(--color-master-lighter);
    color: var(--color-master-darker);
    display: flex;
    font-size: var(--size-small);
    font-weight: 700;
    justify-content: flex-start;
    padding: var(--size-small) var(--size-medium);
  }

  .menu__link {
    border-bottom: 1px solid var(--color-master-lighter);
    justify-content: flex-start !important;
    padding: var(--size-small) var(--size-medium);
    text-decoration: none;
    width: 100%;
  }

  .menu__link:hover {
    text-decoration: underline;
  }
`
