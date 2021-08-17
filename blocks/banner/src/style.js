import styled from '@kuba/styled'

export default styled.style`
  .banner {
    padding-bottom: var(--size-largest);
    padding-top: var(--size-medium);
  }

  .banner__figure {
    position: relative;
  }

  .banner__picture {
    border-radius: var(--size-smallest);
    padding-top: calc(400 / 736 * 100%) !important;
  }

  @media (min-width: 769px) {
    .banner__picture {
      padding-top: calc(300 / 928 * 100%) !important;
    }
  }

  @media (min-width: 961px) {
    .banner__picture {
      padding-top: calc(200 / 1198 * 100%) !important;
    }
  }

  .banner__figcaption {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--size-medium);
    margin: 0 auto;
    padding-top: var(--size-smaller);
    width: 89%;
  }

  @media (min-width: 426px) {
    .banner__figcaption {
      width: 68%;
    }
  }

  @media (min-width: 769px) {
    .banner__figcaption {
      align-items: center;
      flex-direction: row;
      height: 100%;
      justify-content: space-between;
      left: 0;
      padding: var(--size-largest);
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  @media (min-width: 769px) {
    .banner__hgroup {
      width: 42%;
    }
  }

  .banner__text {
    line-height: 1.382;
    text-align: center;
  }

  @media (min-width: 769px) {
    .banner__text {
      text-align: left;
    }
  }
`
