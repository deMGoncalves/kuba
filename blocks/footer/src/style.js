import styled from '@kuba/styled'

export default styled.style`
  .footer {
    background-color: var(--color-master-lighter);
    border-top: 1px solid var(--color-master-light);
    content-visibility: auto;
    margin-top: var(--spacing-lg);
    position: relative;
  }

  .footer__container {
    display: grid;
    gap: var(--spacing_inset-md);
    padding: var(--spacing_inset-md) var(--spacing_inset-xs) !important;
    width: 100%;
  }

  @media (min-width: 769px) {
    .footer__container {
      grid-template-columns: repeat(2, 1fr);
      padding-top: var(--spacing_inset-xs) !important;
    }
  }

  .footer__div {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    justify-content: center;
  }

  @media (min-width: 769px) {
    .footer__div {
      align-items: flex-start;
    }
  }

  .footer__text {
    line-height: var(--line-height-lg);
    text-align: center;
  }

  @media (min-width: 769px) {
    .footer__text {
      text-align: left;
    }
  }
`
