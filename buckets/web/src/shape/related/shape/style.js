import styled from '@kuba/styled'

export default styled.style`
  .shape {
    background-color: #fff;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    min-width: 75%;
    position: relative;
    width: 75%;
  }

  @media (min-width: 426px) {
    .shape {
      min-width: calc(40% - 10.66px);
      width: calc(40% - 10.66px);
    }
  }

  @media (min-width: 769px) {
    .shape {
      min-width: calc(33.33% - 10.66px);
      width: calc(33.33% - 10.66px);
    }
  }

  .shape__header {
    align-items: center;
    display: flex;
    height: 35px;
    padding: 0 var(--spacing_inset-xs);
  }

  .shape__picture {
    padding-top: calc(4 / 3 * 100%) !important;
  }

  .shape__main {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-xs);
  }
`
