import styled from '@kuba/styled'

export default styled.style`
  .related[empty] {
    display: none;
  }

  .related__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }

  .related__metro section {
    background-color: #fff;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    min-width: calc(66.66% - 10.66px);
    position: relative;
    width: calc(66.66% - 10.66px);
  }

  @media (min-width: 426px) {
    .related__metro section {
      min-width: calc(40% - 10.66px);
      width: calc(40% - 10.66px);
    }
  }

  @media (min-width: 769px) {
    .related__metro section {
      min-width: calc(33.33% - 10.66px);
      width: calc(33.33% - 10.66px);
    }
  }
`
