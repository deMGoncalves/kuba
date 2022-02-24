import styled from '@kuba/styled'

export default styled.style`
  .pro {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    grid-area: pro;
  }

  .pro__h2 {
    line-height: var(--line-height-md) !important;
  }

  .pro__metro section {
    background-color: #fff;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    min-width: calc(66.66% - 12px);
    position: relative;
    width: calc(66.66% - 12px);
  }

  @media (min-width: 426px) {
    .pro__metro section {
      min-width: calc(40% - 12px);
      width: calc(40% - 12px);
    }
  }

  @media (min-width: 769px) {
    .pro__metro section {
      min-width: calc(33.33% - 12px);
      width: calc(33.33% - 12px);
    }
  }

  @media (min-width: 961px) {
    .pro__metro section {
      min-width: calc(25% - 12px);
      width: calc(25% - 12px);
    }
  }
`
