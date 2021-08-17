import styled from '@kuba/styled'

export default styled.style`
  .footer {
    background-color: var(--color-master-lighter);
    border-top: 1px solid var(--color-master-light);
    content-visibility: auto;
    position: relative;
  }

  .footer {
    margin-top: var(--size-largest);
  }

  .footer__container {
    display: grid;
    gap: var(--size-largest);
    padding: var(--size-small) var(--size-medium) var(--size-largest) var(--size-medium) !important;
    width: 100%;
  }

  @media (min-width: 769px) {
    .footer__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .footer__div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 769px) {
    .footer__div {
      align-items: flex-start;
    }
  }

  .footer__strong {
    padding-top: var(--size-small);
  }

  .footer__i {
    display: block;
  }

  @media (max-width: 769px) {
    .footer__strong,
    .footer__i {
      text-align: center;
    }
  }
`
