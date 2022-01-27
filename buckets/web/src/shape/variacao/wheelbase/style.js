import styled from '@kuba/styled'

export default styled.style`
  .wheelbase {
    align-items: flex-start;
    border: var(--border-width-hairline) solid var(--color-master-light);
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    height: 178px;
    padding: var(--spacing_inset-xs);
  }

  .wheelbase__span {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
  }

  .wheelbase__text {
    line-height: var(--line-height-lg) !important;
  }
`
