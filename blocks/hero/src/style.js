import styled from '@kuba/styled'

export default styled.style`
  .hero {
    display: inline-flex;
    margin-bottom: var(--spacing-sm);
    margin-top: var(--spacing-nano);
    width: 100%;
  }

  @media (min-width: 961px) {
    .hero {
      margin-bottom: var(--spacing-lg);
    }
  }

  .hero__figure {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    position: relative;
  }

  .hero__picture {
    border-radius: var(--border-radius-sm);
    padding-top: calc(400 / 736 * 100%) !important;
  }

  @media (min-width: 769px) {
    .hero__picture {
      padding-top: calc(400 / 928 * 100%) !important;
    }
  }

  @media (min-width: 961px) {
    .hero__picture {
      padding-top: calc(400 / 1198 * 100%) !important;
    }
  }

  .hero__figcaption {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-sm);
    width: 89%;
  }

  @media (min-width: 769px) {
    .hero__figcaption {
      align-items: flex-start;
      height: 100%;
      justify-content: flex-end;
      left: 0;
      padding: var(--spacing_inset-lg);
      position: absolute;
      top: 0;
      width: 68%;
    }
  }

  @media (min-width: 961px) {
    .hero__figcaption {
      width: 42%;
    }
  }

  .hero__hgroup {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .hero__text {
    line-height: var(--line-height-lg);
  }
`
