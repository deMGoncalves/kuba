import styled from '@kuba/styled'

export default styled.style`
  @media (min-width: 961px) {
    .menu {
      display: none;
    }
  }

  .menu__span {
    align-items: center;
    background-color: var(--color-master-lighter);
    color: var(--color-master-darker);
    display: flex;
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-medium);
    justify-content: flex-start;
    line-height: var(--line-height-lg);
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
  }

  .menu__link {
    border-bottom: var(--border-width-hairline) solid var(--color-master-lighter);
    font-size: var(--font-size-xxxs) !important;
    justify-content: flex-start !important;
    line-height: var(--line-height-lg);
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
    text-decoration: none;
    width: 100%;
  }

  .menu__link:hover {
    text-decoration: underline;
  }
`
