import styled from '@kuba/styled'

export default styled.style`
  .nav__span {
    align-items: center;
    background-color: var(--color-master-lighter);
    color: var(--color-master-darker);
    display: flex;
    font-size: var(--font-size-xxxs);
    font-weight: var(--font-weight-medium);
    justify-content: flex-start;
    line-height: var(--line-height-xxl);
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
  }

  .nav__li {
    border-bottom: var(--border-width-hairline) solid var(--color-master-lighter);
    padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
  }

  .nav__link {
    font-size: var(--font-size-xxxs) !important;
    justify-content: flex-start !important;
    line-height: var(--line-height-xxl);
    text-decoration: none;
    width: 100%;
  }

  .nav__link:hover {
    text-decoration: underline;
  }
`
