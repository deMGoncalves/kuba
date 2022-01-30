import styled from '@kuba/styled'

export default styled.style`
  .vs {
    align-items: center;
    background-color: var(--color-master-darker);
    border-radius: var(--border-radius-circular);
    display: flex;
    height: 89px;
    justify-content: center;
    position: absolute;
    right: -64.5px;
    top: calc(50% - 44.5px);
    width: 89px;
    z-index: 1;
  }

  @media (min-width: 769px) {
    .vs {
      height: 110px;
      right: -75px;
      top: calc(50% - 55px);
      width: 110px;
    }
  }

  @media (min-width: 961px) {
    .vs {
      height: 144px;
      right: -92px;
      top: calc(50% - 72px);
      width: 144px;
    }
  }
`
