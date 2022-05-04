import styled from '@kuba/styled'

export default styled.style`
  .footer {
    border-top: var(--border-width-hairline) solid var(--color-master-light);
    content-visibility: auto;
  }

  .footer__container {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    height: 100%;
    justify-content: center;
    padding: var(--spacing_inset-lg) var(--spacing_inset-xs) !important;
  }

  @media (min-width: 426px) {
    .footer__container {
      align-items: flex-start;
    }
  }

  .footer__section {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  @media (min-width: 426px) {
    .footer__section {
      flex-direction: row;
    }
  }

  .footer__text {
    line-height: var(--line-height-md) !important;
  }

  .footer__nav {
    display: flex;
    gap: var(--spacing_inset-xs);
  }
`
