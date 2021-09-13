import styled from '@kuba/styled'

export default styled.style`
  .splash {
    border-radius: var(--border-radius-sm);
    padding: var(--spacing_inset-xs);
  }

  .splash__icon {
    cursor: pointer;
    margin: var(--spacing-xs) var(--spacing-xs) 0 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .splash__figure {
    position: relative;
  }

  .splash__picture {
    border-radius: var(--border-radius-sm);
    padding-top: calc(400 / 393 * 100%) !important;
  }

  @media (min-width: 769px) {
    .splash__picture {
      padding-top: calc(450 / 737 * 100%) !important;
    }
  }

  @media (min-width: 961px) {
    .splash__picture {
      padding-top: calc(500 / 929 * 100%) !important;
    }
  }

  .splash__figcaption {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    margin: 0 auto;
    padding-top: var(--spacing_inset-xs);
    width: 89%;
  }

  @media (min-width: 426px) {
    .splash__figcaption {
      width: 68%;
    }
  }

  @media (min-width: 769px) {
    .splash__figcaption {
      align-items: flex-start;
      height: 100%;
      justify-content: flex-end;
      left: 0;
      padding: var(--spacing_inset-lg);
      position: absolute;
      top: 0;
      width: 55%;
    }
  }

  .splash__hgroup {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    width: 100%;
  }

  @media (min-width: 769px) {
    .splash__hgroup {
      align-items: flex-start;
    }
  }

  .splash__text {
    line-height: var(--line-height-lg);
    text-align: center;
  }

  @media (min-width: 769px) {
    .splash__text {
      text-align: left;
    }
  }
`
