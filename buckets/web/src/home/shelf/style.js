import styled from '@kuba/styled'

export default styled.style`
  .shelf {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    grid-area: shelf;
  }

  .shelf[empty] {
    display: none;
  }

  .shelf__h2 {
    line-height: var(--line-height-md) !important;
  }

  .shelf__metro section {
    background-color: #fff;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    min-width: calc(66.66% - 12px);
    position: relative;
    width: calc(66.66% - 12px);
  }

  @media (min-width: 426px) {
    .shelf__metro section {
      min-width: calc(40% - 12px);
      width: calc(40% - 12px);
    }
  }

  @media (min-width: 769px) {
    .shelf__metro section {
      min-width: calc(33.33% - 12px);
      width: calc(33.33% - 12px);
    }
  }

  @media (min-width: 961px) {
    .shelf__metro section {
      min-width: calc(25% - 12px);
      width: calc(25% - 12px);
    }
  }
`
