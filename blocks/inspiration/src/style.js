import styled from '@kuba/styled'

export default styled.style`
  .inspiration > div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .inspiration__main {
    display: grid;
    gap: var(--spacing-xxxs);
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

  .inspiration__picture {
    border-radius: var(--border-radius-sm);
    grid-area: thumbnail;
    padding-top: calc(400 / 736 * 100%) !important;
  }

  @media (min-width: 769px) {
    .inspiration__picture {
      padding-top: calc(645 / 591 * 100%) !important;
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
