import styled from '@kuba/styled'

export default styled.style`
  .footer {
    border-top: var(--border-width-hairline) solid var(--color-master-light);
  }

  .footer__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    height: 100%;
    justify-content: center;
    padding: var(--spacing_inset-lg) var(--spacing_inset-xs) !important;
  }

  @media (min-width: 426px) {
    .footer__container {
      align-items: flex-start;
    }
  }

  .footer__text {
    line-height: var(--line-height-md) !important;
  }
`
