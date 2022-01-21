import styled from '@kuba/styled'

export default styled.style`
  .related {
    grid-area: related;
  }

  .related[empty] {
    display: none;
  }

  .related__metro section {
    background-color: #fff;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    min-width: calc(66.66% - 12px);
    position: relative;
    width: calc(66.66% - 12px);
  }

  @media (min-width: 426px) {
    .related__metro section {
      min-width: calc(40% - 12px);
      width: calc(40% - 12px);
    }
  }

  @media (min-width: 769px) {
    .related__metro section {
      min-width: calc(33.33% - 12px);
      width: calc(33.33% - 12px);
    }
  }

  @media (min-width: 961px) {
    .related__metro section {
      min-width: calc(25% - 12px);
      width: calc(25% - 12px);
    }
  }
`
