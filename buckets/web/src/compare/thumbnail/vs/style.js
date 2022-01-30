import styled from '@kuba/styled'

export default styled.style`
  .vs {
    align-items: center;
    background-color: var(--color-master-darker);
    border-radius: var(--border-radius-circular);
    display: flex;
    height: 68px;
    justify-content: center;
    position: absolute;
    right: -54px;
    top: calc(50% - 34px);
    width: 68px;
    z-index: 1;
  }

  @media (min-width: 769px) {
    .vs {
      height: 89px;
      right: -64.5px;
      top: calc(50% - 44.5px);
      width: 89px;
    }
  }

  @media (min-width: 961px) {
    .vs {
      height: 110px;
      right: -75px;
      top: calc(50% - 55px);
      width: 110px;
    }
  }
`
