import styled from '@kuba/styled'

export default styled.style`
  .inspiration > div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-sm);
  }

  .inspiration__main {
    display: grid;
    gap: var(--spacing_inset-xs);
    grid-template-areas:
      'thumbnail thumbnail'
      'box1 box2'
      'box3 box4';
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    .inspiration__main {
      grid-template-areas:
        'thumbnail thumbnail box1 box2'
        'thumbnail thumbnail box3 box4';
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .inspiration__figure {
    grid-area: thumbnail;
    margin-bottom: var(--spacing-xxs);
    position: relative;
  }

  @media (min-width: 769px) {
    .inspiration__figure {
      margin-bottom: 0;
    }
  }

  .inspiration__picture {
    border-radius: var(--border-radius-sm);
    padding-top: calc(400 / 736 * 100%) !important;
  }

  @media (min-width: 769px) {
    .inspiration__picture {
      padding-top: calc(645 / 591 * 100%) !important;
    }
  }

  .inspiration__figcaption {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    margin: 0 auto;
    padding-top: var(--spacing_inset-xs);
    width: 89%;
  }

  @media (min-width: 426px) {
    .inspiration__figcaption {
      width: 68%;
    }
  }

  @media (min-width: 769px) {
    .inspiration__figcaption {
      align-items: flex-start;
      height: 100%;
      justify-content: flex-end;
      left: 0;
      padding: var(--spacing_inset-lg);
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  .inspiration__hgroup {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    width: 100%;
  }

  @media (min-width: 769px) {
    .inspiration__hgroup {
      align-items: flex-start;
    }
  }

  .inspiration__text {
    line-height: var(--line-height-lg);
    text-align: center;
  }

  @media (min-width: 769px) {
    .inspiration__text {
      text-align: left;
    }
  }

  .inspiration__box {
    cursor: pointer;
  }

  .inspiration__box:nth-child(2n) {
    grid-area: box1;
  }

  .inspiration__box:nth-child(3n) {
    grid-area: box2;
  }

  .inspiration__box:nth-child(4n) {
    grid-area: box3;
  }

  .inspiration__box:last-child {
    grid-area: box4;
  }
`
