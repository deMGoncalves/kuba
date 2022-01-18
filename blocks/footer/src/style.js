import styled from '@kuba/styled'

export default styled.style`
  .footer {
    border-top: var(--border-width-hairline) solid var(--color-master-light);
    height: 89px;
  }

  .footer__container {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
    height: 100%;
  }

  .footer__text {
    line-height: var(--line-height-md) !important;
  }
`
