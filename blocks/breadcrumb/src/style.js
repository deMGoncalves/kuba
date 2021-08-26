import styled from '@kuba/styled'

export default styled.style`
  .breadcrumb {
    display: inline-flex;
    margin-bottom: var(--spacing-nano);
    margin-top: var(--spacing-quarck);
    width: 100%;
  }

  .breadcrumb__div {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-nano);
  }

  .breadcrumb__link {
    font-size: var(--font-size-xxxs) !important;
    text-decoration: none;
  }
`
